import { getLastViewed, saveFavorite, isFavorite } from "./utils/storage.js";

const el = document.getElementById("animal-detail");

function renderAnimal(a) {
  if (!a) {
    el.innerHTML = `<p>No animal selected 🐾</p>`;
    return;
  }

  el.innerHTML = `
    <div class="details-card">
      <img src="${a.image}" alt="${a.name}">
      <h2>${a.name}</h2>

      <p><strong>Type:</strong> ${a.type}</p>
      <p><strong>Age:</strong> ${a.age}</p>
      <p><strong>Personality:</strong> ${a.personality}</p>
      <p><strong>Energy:</strong> ${a.energy}</p>

      <button id="favBtn">
        ${isFavorite(a.id) ? "💖 Remove Favorite" : "❤️ Add to Favorites"}
      </button>
    </div>
  `;

  const btn = document.getElementById("favBtn");

  btn.addEventListener("click", () => {
    saveFavorite(a);
    btn.textContent = isFavorite(a.id)
      ? "💖 Remove Favorite"
      : "❤️ Add to Favorites";
  });
}

function init() {
  const animal = getLastViewed();
  renderAnimal(animal);
}

window.addEventListener("load", init);
