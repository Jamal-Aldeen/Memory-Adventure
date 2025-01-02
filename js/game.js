import { updateMoves, updateTime, startTimer } from './ui.js';
import { saveScore, getSavedScore } from './storage.js';

let cards = [];
let flippedCards = [];
let moveCounter = 0;
let timer;
let timeRemaining = 60;

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

export { initGame };
