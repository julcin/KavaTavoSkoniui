const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');
const cards = document.querySelectorAll('.card');

searchForm.addEventListener("submit",formSubmit);

function formSubmit(e) {
  e.preventDefault();
  cardDisplay(e.target[0].value.trim());
}

function cardDisplay(searchText) {
  for(let card of cards) {
    let cardText = card.childNodes[1].childNodes[1].innerHTML.toLowerCase();
    if (cardText.includes(searchText.toLowerCase())) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  }
}