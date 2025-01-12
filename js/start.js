import { GameLogic } from './modules/gameLogic.js';
import { getSavedScores } from './modules/storage.js';
import { preloadAssets } from './modules/preload.js';

// DOM Elements
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const howToPlay = document.getElementById('how-to-play');
const viewScores = document.getElementById('view-scores');
const scoresPopup = document.getElementById('scores-popup');
const closeScoresPopup = document.getElementById('close-scores-popup');
const startGameButton = document.getElementById('start-game');
const difficultySelect = document.getElementById('difficulty-select');
const musicToggle = document.getElementById('music-toggle');
const soundIcon = document.getElementById('sound-icon');
const backgroundMusic = document.getElementById('background-music');
const clickSound = document.getElementById('click-sound');
let musicStarted = false;

// Start background music on user interaction
function startBackgroundMusic() {
    if (!musicStarted) {
        backgroundMusic.volume = 0.5;
        backgroundMusic.play().catch(error => {
            console.error('Failed to start music:', error);
        });
        musicStarted = true;
    }
}

// Event listeners for user interaction
document.addEventListener('click', startBackgroundMusic, { once: true });
document.addEventListener('keydown', startBackgroundMusic, { once: true });

// Show or hide popups
if (howToPlay) {
    howToPlay.addEventListener('click', () => {
        popup.classList.remove('hidden');
        playSound(clickSound);
    });
}

if (closePopup) {
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
        playSound(clickSound);
    });
}

if (viewScores) {
    viewScores.addEventListener('click', () => {
        scoresPopup.classList.remove('hidden');
        playSound(clickSound);

        // Display high scores for all levels
        const easyScores = getSavedScores('easy');
        const mediumScores = getSavedScores('medium');
        const hardScores = getSavedScores('hard');

        const scoresContainer = document.getElementById('scores-page');
        if (scoresContainer) {
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
        }
    });
}

if (closeScoresPopup) {
    closeScoresPopup.addEventListener('click', () => {
        scoresPopup.classList.add('hidden');
        playSound(clickSound);
    });
}

// Start game logic
if (startGameButton) {
    startGameButton.addEventListener('click', async () => {
        const selectedDifficulty = difficultySelect.value;

        try {
            await preloadAssets(selectedDifficulty); // Preload assets for the selected level
            console.log('Assets preloaded successfully!');
            window.location.href = `/${selectedDifficulty}.html`; // Navigate to the level
        } catch (error) {
            console.error('Failed to preload assets:', error);
        }

        playSound(clickSound);
    });
}

// Toggle background music
if (musicToggle) {
    musicToggle.addEventListener('click', () => {
        if (backgroundMusic.volume > 0) {
            backgroundMusic.volume = 0;
            soundIcon.src = 'assets/global/icons/sound-off.png';
        } else {
            backgroundMusic.volume = 0.5;
            soundIcon.src = 'assets/global/icons/sound-on.png';
        }
        playSound(clickSound);
    });
}

// Play a click sound
function playSound(sound) {
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(error => {
            console.error('Failed to play sound:', error);
        });
    }
}

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