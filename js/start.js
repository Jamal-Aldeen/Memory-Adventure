// DOM Elements
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const howToPlay = document.getElementById('how-to-play');
const startGameButton = document.getElementById('start-game');
const difficultySelect = document.getElementById('difficulty-select');
const musicToggle = document.getElementById('music-toggle');
const soundIcon = document.getElementById('sound-icon');
const backgroundMusic = document.getElementById('background-music');
const clickSound = document.getElementById('click-sound');
let musicStarted = false;

// Start background music if not already started
function startBackgroundMusic() {
  if (!musicStarted) {
    backgroundMusic.volume = 0.5;
    backgroundMusic.play().then(() => {
      console.log('Music started!');
    }).catch((error) => {
      console.log('Failed to start music:', error);
    });
    musicStarted = true;
  }
}

// Trigger background music on first valid user interaction
function handleUserInteraction() {
  startBackgroundMusic();
  document.removeEventListener('click', handleUserInteraction);
  document.removeEventListener('keydown', handleUserInteraction);
}

// Event listeners for user interaction
document.addEventListener('click', handleUserInteraction);
document.addEventListener('keydown', handleUserInteraction);

// Show or hide popup
howToPlay.addEventListener('click', () => {
  popup.classList.remove('hidden');
  playClickSound();
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
  playClickSound();
});

// Start game logic based on selected difficulty
startGameButton.addEventListener('click', () => {
  const selectedDifficulty = difficultySelect.value;
  const difficultyUrls = {
    easy: 'easy.html',
    medium: 'medium.html',
    hard: 'hard.html',
  };
  if (selectedDifficulty in difficultyUrls) {
    window.location.href = difficultyUrls[selectedDifficulty];
  } else {
    alert('Please select a difficulty level!');
  }
  playClickSound();
});

// Play sound on difficulty change
difficultySelect.addEventListener('change', () => {
  playClickSound();
});

// Toggle background music and update sound icon
musicToggle.addEventListener('click', () => {
  if (backgroundMusic.volume > 0) {
    backgroundMusic.volume = 0;
    soundIcon.src = 'assets/icons/sound-off.png';
  } else {
    backgroundMusic.volume = 0.5;
    soundIcon.src = 'assets/icons/sound-on.png';
  }
  playClickSound();
});

// Play a click sound
function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Set random animation duration for floating GIFs
const floatingGifs = document.querySelectorAll('.floating-gif');
floatingGifs.forEach(gif => {
  gif.style.animationDuration = `${Math.random() * 6 + 4}s`;
});
