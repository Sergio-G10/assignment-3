// Select all menu items
let cards = document.querySelectorAll('.card');

// Add empty favorites summary
let main = document.querySelector('main');
let summary = document.createElement('div');
summary.id = 'summary';
let summaryHeading = document.createElement('h3');
let summaryHeadingText = document.createTextNode('Favorites Summary');
summaryHeading.appendChild(summaryHeadingText);
summary.appendChild(summaryHeading);
main.appendChild(summary);

// Loop through all cards and add price tag and button
for (let i = 0; i < cards.length; i++) {
  let priceTag = document.createElement('div');
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

// Toggle if it is adding to favorites or removing
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

  var newFavorite = document.createElement('div');
  newFavorite.id = cardID;
  var favoriteName = card.querySelector('h5').textContent;
  var price = card.querySelector('div').textContent;
  var favoriteText = document.createTextNode(favoriteName + ': ' + price);
  
  newFavorite.appendChild(favoriteText);
  summary.appendChild(newFavorite);
}

function removeFavorite(cardID) {
  let card = cards[cardID];

  card.classList.remove('highlight');
  let currentButton = card.querySelector('button');
  currentButton.textContent = 'Add to Favorites';

  var favorite = document.getElementById(cardID);
  favorite.remove();
}