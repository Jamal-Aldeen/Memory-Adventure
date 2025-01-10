import { saveScore, getSavedScores } from './storage.js';

export class GameLogic {
    constructor(totalCards, level) {
        this.totalCards = totalCards;
        this.level = level;
        this.cards = [];
        this.flippedCards = [];
        this.moves = 0;
        this.time = 0;
        this.timerInterval = null;
        this.isGameStarted = false;
        this.isGameOver = false;
        this.cardFlipping = false;
    }

    async start() {
        await this.generateCards();
        this.renderCards();
        this.showCardsTemporarily(); 
        this.addEventListeners();
    }

 

    async generateCards() {
        const cardValues = Array.from({ length: this.totalCards / 2 }, (_, i) => i + 1);
        const cards = [...cardValues, ...cardValues];
        this.cards = this.shuffleArray(cards);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    renderCards() {
        const cardGrid = document.querySelector('.card-grid');
        if (cardGrid) {
            cardGrid.innerHTML = '';
            this.cards.forEach((value, index) => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.dataset.value = value;
                card.dataset.index = index;

                const cardImage = `assets/${this.level}/images/card${value}.png`;
                const cardBackImage = `assets/${this.level}/images/card-back.png`;

                card.innerHTML = `
                    <div class="card-front">
                        <img src="${cardImage}" alt="Card ${value}" onerror="this.src='assets/global/images/default/card-placeholder.png'">
                    </div>
                    <div class="card-back" style="background-image: url('${cardBackImage}');"></div>
                `;
                cardGrid.appendChild(card);
            });
        }
    }

    // showCardsTemporarily based on the level

    showCardsTemporarily() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.add('flipped'));
    
        const countdown = document.createElement('div');
        countdown.id = 'countdown';
        countdown.textContent = '3';
        document.body.appendChild(countdown);
    
        let count;
        switch (this.level) {
            case 'easy':
                count = 3; 
                break;
            case 'medium':
                count = 5; 
                break;
            case 'hard':
                count = 7; 
                break;
            default:
                count = 5; 
        }
    
        const countdownInterval = setInterval(() => {
            count--;
            countdown.textContent = count;
            if (count === 0) {
                clearInterval(countdownInterval);
                countdown.remove();
                cards.forEach(card => card.classList.remove('flipped'));
                this.isGameStarted = true;
    
                this.time = 0;
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.textContent = this.formatTime(this.time); 
                }
    
             
                this.startTimer();
            }
        }, 1000);
    }



    startTimer() {
        this.timerInterval = setInterval(() => {
            this.time++;
            const timerElement = document.getElementById('timer');
            if (timerElement) {
                timerElement.textContent = this.formatTime(this.time);
            }
        }, 1000);
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    addEventListeners() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => this.handleCardClick(card));
        });
    }

    handleCardClick(card) {
        if (!this.isGameStarted || this.flippedCards.length === 2 || card.classList.contains('flipped') || this.cardFlipping) return;

        this.flipCard(card);
    }

    flipCard(card) {
        this.cardFlipping = true;
        card.classList.add('flipped');
        this.flippedCards.push(card);

        if (this.flippedCards.length === 2) {
            this.moves++;
            const movesElement = document.getElementById('moves');
            if (movesElement) {
                movesElement.textContent = this.moves;
            }
            this.checkForMatch();
        } else {
            this.cardFlipping = false;
        }
    }

    checkForMatch() {
        const [card1, card2] = this.flippedCards;

        if (card1.dataset.value === card2.dataset.value) {
            // Match found
            card1.classList.add('matched');
            card2.classList.add('matched');
            this.flippedCards = [];
            this.cardFlipping = false;

            // Play match sound
            const matchSound = document.getElementById('match-sound');
            if (matchSound) {
                matchSound.play().catch(error => {
                    console.error('Failed to play match sound:', error);
                });
            }

            // Check if the game is won after each match
            if (this.isGameWon()) {
                this.endGame();
            }
        } else {
            // No match, flip cards back after a delay
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                this.flippedCards = [];
                this.cardFlipping = false;
            }, 1000);
        }
    }

    isGameWon() {
        const matchedCards = document.querySelectorAll('.card.matched');
        return matchedCards.length === this.totalCards;
    }

    endGame() {
        clearInterval(this.timerInterval);
        this.isGameOver = true;

        // Show the "Level Complete" popup
        const gameOverModal = document.querySelector('.game-over');
        if (gameOverModal) {
            gameOverModal.classList.remove('hidden');
            gameOverModal.classList.add('visible'); // Ensure the popup is visible
            document.getElementById('final-time').textContent = this.formatTime(this.time);
            document.getElementById('final-moves').textContent = this.moves;

            // Add event listener for "Save Score & Return Home" button
            const saveScoreButton = document.getElementById('save-score');
            if (saveScoreButton) {
                saveScoreButton.addEventListener('click', () => {
                    // Save the score to local storage
                    saveScore(this.level, this.moves, this.time);

                    // Redirect to the home page
                    window.location.href = '/index.html';
                });
            }
        }

        // Play the win sound
        const winSound = document.getElementById('win-sound');
        if (winSound) {
            winSound.play().catch(error => {
                console.error('Failed to play win sound:', error);
            });
        }
    }

    goToNextLevel() {
        let nextLevel;
        switch (this.level) {
            case 'easy': nextLevel = 'medium'; break;
            case 'medium': nextLevel = 'hard'; break;
            case 'hard': alert('You have completed all levels!'); window.location.href = '/index.html'; return;
            default: nextLevel = 'easy';
        }
        window.location.href = `/${nextLevel}.html`;
    }
}