// Open and Close Popup
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const howToPlay = document.getElementById('how-to-play');


howToPlay.addEventListener('click', () => {
  popup.classList.remove('hidden');
});


closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});


// Page Navigation in Popup
const nextPage = document.getElementById('next-page');
const popupPage1 = document.getElementById('popup-page1');
const popupPage2 = document.getElementById('popup-page2');


nextPage.addEventListener('click', () => {
  popupPage1.classList.add('hidden');
  popupPage2.classList.remove('hidden');


  // Rotate GIF on Page Transition
  const gifToRotate = document.querySelector('.gif1');
  gifToRotate.style.animation = 'rotate 1s ease-in-out';
  setTimeout(() => {
    gifToRotate.style.animation = ''; // Reset animation
  }, 1000);
});


// Start Game Button
const startGame = document.getElementById('start-game');
startGame.addEventListener('click', () => {
  window.location.href = 'game.html';
});


// Define rotation animation
document.head.insertAdjacentHTML(
  'beforeend',
  `<style>
  @keyframes rotate {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
  }
  </style>`
);


