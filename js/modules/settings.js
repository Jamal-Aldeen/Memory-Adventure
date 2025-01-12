import { playSound } from './sound.js';

// DOM Elements
const settingsPopup = document.getElementById('settings-popup');
const musicToggle = document.getElementById('music-toggle');
const soundIcon = document.getElementById('sound-icon');
const backgroundMusic = document.getElementById('background-music');
const volumeSlider = document.getElementById('volume-slider');
const clickSound = document.getElementById('click-sound');
let musicStarted = false;

// Update volume icon based on current volume level
function updateVolumeIcon() {
  const volume = backgroundMusic.volume;

  if (volume === 0 || backgroundMusic.paused) {
    soundIcon.src = 'assets/global/icons/sound-off.png'; 
  } else {
    soundIcon.src = 'assets/global/icons/sound-on.png'; 
  }
}

// Toggle background music (play/pause)
musicToggle.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
  playSound(clickSound);
  updateVolumeIcon(); 
});

// Adjust volume using slider
volumeSlider.addEventListener('input', () => {
  backgroundMusic.volume = volumeSlider.value;
  updateVolumeIcon();
  playSound(clickSound);
});

// Update icon on page load
window.addEventListener('load', () => {
  backgroundMusic.volume = volumeSlider.value;
  backgroundMusic.play().catch(error => {
    console.error('Failed to start music:', error);
  });
  musicStarted = true;
  updateVolumeIcon(); 
});

// Open Settings Pop-Up
function openSettingsPopup() {
  settingsPopup.classList.add("visible");
  updateVolumeIcon(); 
  playSound(clickSound);
}

// Close Settings Pop-Up
function closeSettingsPopup() {
  settingsPopup.classList.remove("visible");  
  playSound(clickSound);
}

// Attach to window object to make it globally accessible
window.closeSettingsPopup = closeSettingsPopup;

// Add event listeners to all settings buttons
document.querySelectorAll('.settings-button').forEach(button => {
  button.addEventListener('click', openSettingsPopup);
});