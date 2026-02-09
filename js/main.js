import { animals } from "./data.js";
import { saveFavorite } from "./utils/storage.js";

const container = document.getElementById("animals");
const status = document.getElementById("status");
const typeFilter = document.getElementById("typeFilter");
const ageFilter = document.getElementById("ageFilter");

function render(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    status.textContent = "No animals found 😿";
    return;
  }

  status.textContent = "";

  list.forEach(a => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${a.image}" alt="${a.name}">
      <h3>${a.name}</h3>
      <p>${a.type} • ${a.age}</p>
      <div class="card-buttons">
        <a href="animal.html?name=${encodeURIComponent(a.name)}">Details</a>
        <button>❤️</button>
      </div>
    `;

    // fallback por si una imagen falla
    const img = card.querySelector("img");
    img.onerror = () => {
      img.src = "https://picsum.photos/400/300";
    };

    card.querySelector("button").onclick = () => saveFavorite(a);
    container.appendChild(card);
  });
}

function applyFilters() {
  let result = animals;

  if (typeFilter.value) {
    result = result.filter(a => a.type === typeFilter.value);
  }

  if (ageFilter.value) {
    result = result.filter(a => a.age === ageFilter.value);
  }

  render(result);
}

typeFilter.onchange = applyFilters;
ageFilter.onchange = applyFilters;

status.textContent = "Showing adoptable animals 🐾";
render(animals);
