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

    // Shuffle the unflipped cards to randomize the hint
    const shuffledCards = shuffleArray(unflippedCards);
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

// Temporarily show unmatched cards
function showUnmatched(cards) {
    cards.forEach(card => card.classList.add('flipped'));
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped'));
    }, 2000); // 2 seconds delay
}