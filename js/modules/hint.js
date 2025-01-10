// hint.js 

export function initializeHint(gameLogic) {
    // Get the hint button & add eventListener
    const hintButton = document.getElementById('hint-button');
    if (hintButton) {
        hintButton.addEventListener('click', () => provideHint(gameLogic));
    }
}

function provideHint(gameLogic) {
    const cards = document.querySelectorAll('.card:not(.flipped):not(.matched)');
    if (cards.length < 2) return;

    cards.forEach(card => card.classList.add('hint'));
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('hint'));
    }, 2000); // Show hint for 2 seconds
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
    }, timeShown(level)); // 2 seconds delay
}