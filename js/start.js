import { GameLogic } from './modules/gameLogic.js';
import { getSavedScores } from './modules/storage.js';
import { startBackgroundMusic, playSound } from './modules/sound.js';

// DOM Elements
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const howToPlay = document.getElementById('how-to-play');
const viewScores = document.getElementById('view-scores');
const scoresPopup = document.getElementById('scores-popup');
const closeScoresPopup = document.getElementById('close-scores-popup');
const startGameButton = document.getElementById('start-game');
const difficultySelect = document.getElementById('difficulty-select');
const clickSound = document.getElementById('click-sound');
let musicStarted = false;

// Function to start background music on user interaction
function handleUserInteraction() {
    if (!musicStarted) {
        startBackgroundMusic();
        musicStarted = true;
    }
}

// Event listeners for user interaction
document.addEventListener('click', handleUserInteraction, { once: true });
document.addEventListener('keydown', handleUserInteraction, { once: true });

// Show or hide popups
howToPlay.addEventListener('click', () => {
    popup.classList.remove('hidden');
    playSound(clickSound);
});

closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
    playSound(clickSound);
});

viewScores.addEventListener('click', () => {
    scoresPopup.classList.remove('hidden');
    playSound(clickSound);

    // Display high scores for all levels
    const easyScores = getSavedScores('easy');
    const mediumScores = getSavedScores('medium');
    const hardScores = getSavedScores('hard');

    const scoresContainer = document.getElementById('scores-page');
    scoresContainer.innerHTML = `
        <h2>High Scores</h2>
        <div class="score-container">
            <h3>Easy Level</h3>
            <table>
                <tr>
                    <th>Moves</th>
                    <th>Time</th>
                </tr>
                ${easyScores.map(score => `
                    <tr>
                        <td>${score.moves}</td>
                        <td>${formatTime(score.time)}</td>
                    </tr>
                `).join('')}
            </table>

            <h3>Medium Level</h3>
            <table>
                <tr>
                    <th>Moves</th>
                    <th>Time</th>
                </tr>
                ${mediumScores.map(score => `
                    <tr>
                        <td>${score.moves}</td>
                        <td>${formatTime(score.time)}</td>
                    </tr>
                `).join('')}
            </table>

            <h3>Hard Level</h3>
            <table>
                <tr>
                    <th>Moves</th>
                    <th>Time</th>
                </tr>
                ${hardScores.map(score => `
                    <tr>
                        <td>${score.moves}</td>
                        <td>${formatTime(score.time)}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
    `;
});

closeScoresPopup.addEventListener('click', () => {
    scoresPopup.classList.add('hidden');
    playSound(clickSound);
});

// Start game logic
startGameButton.addEventListener('click', () => {
    const selectedDifficulty = difficultySelect.value;
    window.location.href = `/${selectedDifficulty}.html`;
    playSound(clickSound);
});

// Helper function to format time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Set random animation duration for floating GIFs
const floatingGifs = document.querySelectorAll('.floating-gif');
floatingGifs.forEach(gif => {
    gif.style.animationDuration = `${Math.random() * 6 + 4}s`;
});