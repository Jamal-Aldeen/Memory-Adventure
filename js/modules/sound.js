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
