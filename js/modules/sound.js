const settingsButton = document.getElementById('settings-button');
const settingsPopup = document.getElementById('settings-popup');
const musicToggle = document.getElementById('music-toggle');
const soundIcon = document.getElementById('sound-icon');
const backgroundMusic = document.getElementById('background-music');
const startGameButton = document.getElementById('start-restart-btn');
const hintButton = document.getElementById('hint-button');
const nextButton = document.getElementById('next-level');
const saveScoreButton = document.getElementById('save-score');
const cards = document.querySelectorAll('.card');
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

// Click sound added to each of the elements
settingsButton.addEventListener('click', () => {
    playSound(clickSound);
});

settingsPopup.addEventListener('click', () => {
    playSound(clickSound);
});

startGameButton.addEventListener('click', () => {
    playSound(clickSound);
});

hintButton.addEventListener('click', () => {
    playSound(clickSound);
});

nextButton.addEventListener('click', () => {
    playSound(clickSound);
});

saveScoreButton.addEventListener('click', () => {
    playSound(clickSound);
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        playSound(clickSound);
    });
});

// Toggle background music
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

// Play a click sound
function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}
