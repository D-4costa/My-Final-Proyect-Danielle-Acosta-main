import { animals } from "./data.js";

const animalsContainer = document.getElementById("animals");
const status = document.getElementById("status");
const typeFilter = document.getElementById("typeFilter");
const ageFilter = document.getElementById("ageFilter");

function displayAnimals(list) {
  animalsContainer.innerHTML = "";

  if (list.length === 0) {
    status.textContent = "No animals found 😿";
    return;
  } 

  status.textContent = "";

  list.forEach(animal => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}">
      <h3>${animal.name}</h3>
      <p>${animal.type} • ${animal.age}</p>
      <button>Add to Favorites</button>
    `;

    animalsContainer.appendChild(card);
  });
}

function applyFilters() {
  let filtered = animals;

  if (typeFilter.value) {
    filtered = filtered.filter(a => a.type === typeFilter.value);
  }

  if (ageFilter.value) {
    filtered = filtered.filter(a => a.age === ageFilter.value);
  }

  displayAnimals(filtered);
}

// EVENTS
typeFilter.addEventListener("change", applyFilters);
ageFilter.addEventListener("change", applyFilters);

// INIT
status.textContent = "Showing adoptable animals 🐾";
displayAnimals(animals);
