// Select all menu items
let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  let priceTag = document.createElement('div.price');
  let price = document.createTextNode('$' + (i+1));
  priceTag.appendChild(price);
  priceTag.classList.add('price-tag');
  cards[i].appendChild(priceTag);

  let button = document.createElement('button');
  let buttonText = document.createTextNode('Add to Favorites');
  button.appendChild(buttonText);
  button.classList.add('favorites-button');

  button.addEventListener('click', function() {
    toggleFavorite(i);
  });

  cards[i].appendChild(button);
}

function toggleFavorite(cardID) {
  let card = cards[cardID];
  if (card.classList.contains('highlight')) {
    removeFavorite(cardID);
  } else {
    addToFavorites(cardID);
  }
}

function addToFavorites(cardID) {
  let card = cards[cardID];

  card.classList.add('highlight');
  let currentButton = card.querySelector('button');
  currentButton.textContent = 'Remove Favorite';
  console.log(card);
}

function removeFavorite(cardID) {
  let card = cards[cardID];

  card.classList.remove('highlight');
  let currentButton = card.querySelector('button');
  currentButton.textContent = 'Add to Favorites';
}