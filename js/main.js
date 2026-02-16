import { fetchDogs } from "./api/dogApi.js";
import { fetchCats } from "./api/catApi.js";
import { saveFavorite, saveLastViewed } from "./utils/storage.js";

const container = document.getElementById("animals");
const status = document.getElementById("status");
const search = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");
const ageFilter = document.getElementById("ageFilter");

let animals = [];

/* ---------------- LOAD ANIMALS ---------------- */

async function loadAnimals() {
  try {
    status.textContent = "Loading animals...";

    const dogs = await fetchDogs();
    const cats = await fetchCats();

    // unir todos
    animals = [...dogs, ...cats];

    status.textContent = `Loaded ${animals.length} pets 🐾`;

    render(animals);

  } catch (error) {
    console.error("Error loading animals:", error);
    status.textContent = "Failed to load animals ❌";
  }
}

/* ---------------- RENDER CARDS ---------------- */

function render(list) {
  container.innerHTML = "";

  if (!list.length) {
    status.textContent = "No matches 😿";
    return;
  }

  list.forEach(animal => {

    const card = document.createElement("div");
    card.className = "card fade-in";

    card.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}">
      <h3>${animal.name}</h3>
      <p>${animal.type} • ${animal.age}</p>
      <p class="traits">${animal.personality} • ${animal.energy} energy</p>

      <div class="card-buttons">
        <button class="details">Details</button>
        <button class="fav">❤️</button>
      </div>
    `;

    /* FAVORITE */
    card.querySelector(".fav").addEventListener("click", () => {
      saveFavorite(animal);
    });

    /* DETAILS */
    card.querySelector(".details").addEventListener("click", () => {
      saveLastViewed(animal);
      window.location.href = `animal.html?id=${animal.id}`;
    });

    /* HOVER ANIMATION */
    card.addEventListener("mouseenter", () => card.classList.add("hover"));
    card.addEventListener("mouseleave", () => card.classList.remove("hover"));

    container.appendChild(card);
  });
}

/* ---------------- FILTERS ---------------- */

function applyFilters() {

  let filtered = [...animals];

  if (typeFilter.value)
    filtered = filtered.filter(a => a.type === typeFilter.value);

  if (ageFilter.value)
    filtered = filtered.filter(a => a.age === ageFilter.value);

  if (search.value)
    filtered = filtered.filter(a =>
      a.name.toLowerCase().includes(search.value.toLowerCase())
    );

  render(filtered);
}

/* ---------------- EVENTS ---------------- */

search.addEventListener("input", applyFilters);
typeFilter.addEventListener("change", applyFilters);
ageFilter.addEventListener("change", applyFilters);

window.addEventListener("load", loadAnimals);

window.addEventListener("offline", () => {
  status.textContent = "Offline mode ⚠";
});

window.addEventListener("online", () => {
  status.textContent = "Back online ✅";
});

