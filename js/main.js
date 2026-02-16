import { fetchDogs } from "./api/dogApi.js";
import { fetchCats } from "./api/catApi.js";
import { toggleFavorite, saveLastViewed, isFavorite } from "./utils/storage.js";

const container = document.getElementById("animals");
const status = document.getElementById("status");
const search = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");
const ageFilter = document.getElementById("ageFilter");

let animals = [];

/* ---------------- LOAD DATA ---------------- */

async function loadAnimals() {
  try {
    status.textContent = "Loading animals...";

    const dogs = await fetchDogs();
    const cats = await fetchCats();

    animals = [...dogs, ...cats];

    status.textContent = `Loaded ${animals.length} pets 🐾`;

    render(animals);

  } catch (error) {
    console.error(error);
    status.textContent = "Failed to load animals ❌";
  }
}

/* ---------------- RENDER ---------------- */

function render(list) {
  container.innerHTML = "";

  if (!list.length) {
    status.textContent = "No matches 😿";
    return;
  }

  list.forEach(animal => {

    const card = document.createElement("div");
    card.className = "card fade-in";

    const img = document.createElement("img");
    img.src = animal.image;
    img.alt = animal.name;
    img.onerror = () =>
      img.src = "https://cdn-icons-png.flaticon.com/512/616/616408.png";

    const title = document.createElement("h3");
    title.textContent = animal.name;

    const info = document.createElement("p");
    info.textContent = `${animal.type} • ${animal.age}`;

    const traits = document.createElement("p");
    traits.className = "traits";
    traits.textContent = `${animal.personality} • ${animal.energy} energy`;

    const btnBox = document.createElement("div");
    btnBox.className = "card-buttons";

    /* DETAILS BUTTON */

    const detailsBtn = document.createElement("button");
    detailsBtn.textContent = "Details";
    detailsBtn.addEventListener("click", () => {
      saveLastViewed(animal);
      window.location.href = "animal.html";
    });

    /* FAVORITE BUTTON */

    const favBtn = document.createElement("button");
    favBtn.textContent = isFavorite(animal.id) ? "💖" : "❤️";

    favBtn.addEventListener("click", () => {
      toggleFavorite(animal);
      favBtn.textContent = isFavorite(animal.id) ? "💖" : "❤️";
    });

    card.addEventListener("mouseenter", () => card.classList.add("hover"));
    card.addEventListener("mouseleave", () => card.classList.remove("hover"));

    btnBox.append(detailsBtn, favBtn);
    card.append(img, title, info, traits, btnBox);
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
window.addEventListener("offline", () => status.textContent = "Offline mode ⚠");
window.addEventListener("online", () => status.textContent = "Back online ✅");

