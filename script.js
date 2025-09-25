// Select all menu items
let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  let button = document.createElement('button');
  let buttonText = document.createTextNode('Add to Favorites');
  button.appendChild(buttonText);
  button.classList.add('favorites-button');

  cards[i].appendChild(button);
}