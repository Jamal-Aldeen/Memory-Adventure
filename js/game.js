import { updateMoves, updateTime, startTimer } from './ui.js';
import { saveScore, getSavedScore } from './storage.js';

let cards = [];
let flippedCards = [];
let moveCounter = 0;
let timer;
let timeRemaining = 60;

// select All Cards
const AllCards = document.querySelectorAll('.card');

// Store Cards in array
const BlocksOFCards = Array.from(AllCards); 

function initGame() {
  const difficulty = document.getElementById('difficulty').value;
  setupBoard(difficulty);
  startTimer(timeRemaining);
}

function setupBoard(difficulty) {

}

function generateCards(difficulty) {

}

function flipCard(cardElement) {

}

function checkForMatch() {

}

//  get numbers of cards  ==>   const current = cards.length; 

function shuffleCards(cards) {
    const current = cards.length;
    
    cards.forEach(card => {
        const OrderCard = Math.floor(Math.random() * current);
        card.style.order = OrderCard;
    });
}
shuffleCards(BlocksOFCards);


export { initGame };
