import { getFavorites } from './utils/storage.js';

const container = document.getElementById('favorites');

function init() {
  const favs = getFavorites();

  container.innerHTML = "";

  if (!favs.length) {
    container.innerHTML = "<p>No favorites yet 🐾</p>";
    return;
  }

  favs.forEach(a => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${a.image}" alt="${a.name}">
      <h3>${a.name}</h3>
      <p>${a.type} • ${a.age}</p>
      <p class="traits">${a.personality} • ${a.energy} energy</p>
    `;

    container.appendChild(card);
  });
}

init();
