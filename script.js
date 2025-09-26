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

// Add Running Total below Summary
let runningTotal = document.createElement('div');
runningTotal.id = 'total';

let runningTotalHeading = document.createElement('h4');
let totalHeadingText = document.createTextNode('Total');
runningTotalHeading.appendChild(totalHeadingText);

let totalValue = document.createElement('p');
totalValue.id = 'value';
let totalValueText = document.createTextNode('$0');
totalValue.appendChild(totalValueText);

runningTotal.appendChild(runningTotalHeading);
runningTotal.appendChild(totalValue);
main.appendChild(runningTotal);


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

  // Create new favorite div and give unique ID based on card number
  var newFavorite = document.createElement('div');
  newFavorite.id = cardID;
  var favoriteName = card.querySelector('h5').textContent;

  var price = document.createElement('span');
  var priceText = card.querySelector('div').textContent;
  var priceTextNode = document.createTextNode(priceText);
  price.appendChild(priceTextNode);

  var favoriteText = document.createTextNode(favoriteName + ': ');
  
  newFavorite.appendChild(favoriteText);
  newFavorite.appendChild(price);
  summary.appendChild(newFavorite);

  calculateNewTotal();
}

function removeFavorite(cardID) {
  let card = cards[cardID];

  card.classList.remove('highlight');
  let currentButton = card.querySelector('button');
  currentButton.textContent = 'Add to Favorites';

  // Remove favorite div based on card number
  var favorite = document.getElementById(cardID);
  favorite.remove();

  calculateNewTotal();
}

function calculateNewTotal() {
  let total = 0;

  let favorites = summary.querySelectorAll('div');

  // Loop through all favorites and add the prices together based on span (without the $ sign)
  for (let i = 0; i < favorites.length; i++) {
    var price = favorites[i].querySelector('span').textContent.substring(1);

    total += parseInt(price);
  }

  totalValue.textContent = '$' + total;
}