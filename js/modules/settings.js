// DOM Elements
const settingsPopup = document.getElementById('settings-popup');
const musicToggle = document.getElementById('music-toggle');
const soundIcon = document.getElementById('sound-icon');
const backgroundMusic = document.getElementById('background-music');
const volumeSlider = document.getElementById('volume-slider');
let musicStarted = false;

// Update volume icon based on current volume level
function updateVolumeIcon() {
  const volume = backgroundMusic.volume;

  if (volume === 0 || backgroundMusic.paused) {
    soundIcon.src = 'assets/global/icons/sound-off.png'; // أيقونة الصوت مغلق
  } else {
    soundIcon.src = 'assets/global/icons/sound-on.png'; // أيقونة الصوت مفتوح
  }
}

// Start background music on user interaction
function startBackgroundMusic() {
  if (!musicStarted) {
    backgroundMusic.volume = volumeSlider.value; // تعيين مستوى الصوت الافتراضي
    backgroundMusic.play().catch(error => {
      console.error('Failed to start music:', error);
    });
    musicStarted = true;
  }
}

// Event listeners for user interaction
document.addEventListener('click', startBackgroundMusic); // تمت إزالة { once: true }
document.addEventListener('keydown', startBackgroundMusic); // تمت إزالة { once: true }

// Toggle background music (play/pause)
musicToggle.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
  updateVolumeIcon(); // تحديث الأيقونة هنا
});

// Adjust volume using slider
volumeSlider.addEventListener('input', () => {
  backgroundMusic.volume = volumeSlider.value;
  updateVolumeIcon(); // تحديث الأيقونة هنا
});

// Update icon on page load
window.addEventListener('load', () => {
  backgroundMusic.volume = volumeSlider.value; // تعيين مستوى الصوت الافتراضي
  backgroundMusic.play().catch(error => {
    console.error('Failed to start music:', error);
  });
  musicStarted = true;
  updateVolumeIcon(); // تحديث الأيقونة هنا
});

// Open Settings Pop-Up
function openSettingsPopup() {
  settingsPopup.classList.add("visible");
  updateVolumeIcon(); // تحديث الأيقونة هنا
}

// Close Settings Pop-Up
function closeSettingsPopup() {
  settingsPopup.classList.remove("visible");
}

// Add event listeners to all settings buttons
document.querySelectorAll('.settings-button').forEach(button => {
  button.addEventListener('click', openSettingsPopup);
});