import { getFavorites } from './utils/storage.js';
import { animalCard } from './components/animalCard.js';

const container = document.getElementById('favorites');
const status = document.getElementById('status');

function init() {
  const favs = getFavorites();

  if (!favs.length) {
    status.textContent = "No favorites yet 💔";
    return;
  }

  status.textContent = `You have ${favs.length} favorites ❤️`;

  favs.forEach(animal => {
    container.appendChild(animalCard(animal));
  });
}

window.addEventListener("load", init);
