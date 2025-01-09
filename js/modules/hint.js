// // hint.js
// import { shuffleArray, showUnmatched } from "./utils";

// export function provideHint(cards, level) {
//     // Ensure the game has started and there are cards to provide a hint for
//     if (!cards || cards.length === 0) return;

//     // Find all unflipped and unmatched cards
//     const unflippedCards = [...cards].filter(card => 
//         !card.classList.contains('flipped') && !card.classList.contains('matched')
//     );

//     const shuffledCards = shuffleArray(unflippedCards);
//     showCardsTemporarily(shuffledCards);
// }

// ORR

// hint.js 

export function initializeHint(gameLogic) {
    // Get the hint button & add eventListener
    const hintButton = document.getElementById('hint-button');
    if (hintButton) {
        hintButton.addEventListener('click', () => provideHint(gameLogic));
    }
}

function provideHint(gameLogic) {

    const cards = document.querySelectorAll('.card');
    if (!cards || cards.length === 0) return;     // Ensure the game has started and there are cards to provide a hint for

    // Find all unflipped and unmatched cards
    const unflippedCards = [...cards].filter(card => 
        !card.classList.contains('flipped') && !card.classList.contains('matched')
    );

    // If there are fewer than 2 unflipped cards, no hint can be given
    if (unflippedCards.length < 2) return;

    // Shuffle the unflipped cards
    const shuffledCards = shuffleArray(unflippedCards);

    // Reposition the shuffled cards in the grid, keeping matched cards in place
    repositionCards(shuffledCards, [...cards]);

    showUnmatched(shuffledCards);
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

// Temporarily show unmatched cards
function showUnmatched(cards) {
    cards.forEach(card => card.classList.add('flipped'));
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped'));
    }, 2000); // 2 seconds delay
}