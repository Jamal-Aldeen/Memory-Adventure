// hint.js 

export function initializeHint(gameLogic) {
    // Get the hint button & add eventListener
    const hintButton = document.getElementById('hint-button');
    const hintsRemaining = document.getElementById('hints-remaining');

    if (hintButton && hintsRemaining) {
        // Set the initial number of hints based on the level
        let hintCounter = getHintCount(gameLogic);
        hintsRemaining.textContent = `${hintCounter}`;

        hintButton.addEventListener('click', () => {
            if (hintCounter > 0) {
                provideHint(gameLogic, () => {
                    hintCounter--;
                    hintsRemaining.textContent = `${hintCounter}`;
                });
            } else {
                alert('No hints remaining!');
            }
        });
    }
}

function provideHint(gameLogic, onHintProvided) {

    const cards = document.querySelectorAll('.card');
    if (!cards || cards.length === 0) return;     // Ensure the game has started and there are cards to provide a hint for

    // Find all unflipped and unmatched cards
    const unflippedCards = [...cards].filter(card => 
        !card.classList.contains('flipped') && !card.classList.contains('matched')
    );

    // If there are fewer than 2 unflipped cards, no hint can be given
    if (unflippedCards.length < 2) return;

    // Shuffle the unflipped cards & reposition the unmatched cards in the grid
    const shuffledCards = shuffleArray(unflippedCards);
    repositionCards(shuffledCards, [...cards]);
    showUnmatched(shuffledCards, gameLogic.level);

    // Call the callback to handle hint counter updates
    if (onHintProvided) onHintProvided(); 
}

// Shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function repositionCards(unflippedCards, allCards) {
    const cardGrid = document.querySelector('.card-grid'); // Get the card grid element
    if (cardGrid) {
        // Create a copy of allCards to avoid mutating the original array
        const updatedCards = [...allCards];

        // Replace unflipped and unmatched cards with shuffled cards
        let shuffledIndex = 0;
        for (let i = 0; i < updatedCards.length; i++) {
            const card = updatedCards[i];
            if (!card.classList.contains('flipped') && !card.classList.contains('matched')) {
                // Replace this card with the next shuffled card
                updatedCards[i] = unflippedCards[shuffledIndex];
                shuffledIndex++;
            }
        }

        // Clear the grid and append cards in the updated order
        cardGrid.innerHTML = '';
        updatedCards.forEach(card => cardGrid.appendChild(card));
    }
}

// Define the number of hints allowed for each level
function getHintCount(level) {
    switch (level) {
        case 'easy': return 5;   // Allow 5 hints in easy mode
        case 'medium': return 3; // Allow 3 hints in medium mode
        case 'hard': return 2;   // Allow 2 hints in hard mode
    }
}

function timeShown(level){
    let hintTime;
    switch (level) {
        case 'easy': hintTime = 2000; break;
        case 'medium': hintTime = 7000; break;
        case 'hard': hintTime = 5000; break;
    }
return hintTime
}

// Temporarily show unmatched cards
function showUnmatched(cards, level) {
    cards.forEach(card => card.classList.add('flipped'));
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped'));
    }, timeShown(level)); // delay based on level
}