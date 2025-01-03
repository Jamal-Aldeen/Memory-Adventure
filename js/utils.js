
// function to create element

function createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }
  
  // function to add class

  function addClass(element, className) {
      element.classList.add(className);
  }
  
  // function to remove class
  
  function removeClass(element, className) {
      element.classList.remove(className);
  }
  
  // function to add event listener
  
  function addEventListener(element, event, callback) {
      element.addEventListener(event, callback);
  }  

  // function to shuffle array
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // function to delay
  
  function delay(callback, time) {
    setTimeout(callback, time);
  }
  
  // function to check if cards match
  
  function areCardsMatch(card1, card2) {
    return card1.dataset.value === card2.dataset.value;
  }
  
  // function to create cards
  
  function createCards(numberOfPairs) {
      const cards = [];
      for (let i = 1; i <= numberOfPairs; i++) {
          cards.push({value: i});
          cards.push({value: i});
      }
      return shuffleArray(cards);
  }
  
    // function to render cards
  
  function renderCards(cards, container) {
      container.innerHTML = ''; // clear the container before adding new cards
      cards.forEach(card => {
          const cardElement = createElement('div', 'card');
          cardElement.dataset.value = card.value; // store card value in data attribute
          container.appendChild(cardElement);
      });
  }
  
  
  export {createElement, addClass, removeClass, addEventListener, shuffleArray, delay, areCardsMatch, createCards, renderCards};