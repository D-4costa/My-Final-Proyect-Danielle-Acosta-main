import { fetchDogs } from "./api/dogApi.js";
import { fetchCats } from "./api/catApi.js";
import { saveFavorite, saveLastViewed, isFavorite } from "./utils/storage.js";

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

    // 🔥 NO reconstruir datos
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

    img.onerror = () => {
      img.src = "https://cdn-icons-png.flaticon.com/512/616/616408.png";
    };

    const favIcon = document.createElement("button");
    favIcon.className = "fav";
    favIcon.textContent = isFavorite(animal.id) ? "💖" : "❤️";

    const detailsBtn = document.createElement("button");
    detailsBtn.className = "details";
    detailsBtn.textContent = "Details";

    card.appendChild(img);

    card.innerHTML += `
      <h3>${animal.name}</h3>
      <p>${animal.type} • ${animal.age}</p>
      <p class="traits">${animal.personality} • ${animal.energy} energy</p>
    `;

    const btnBox = document.createElement("div");
    btnBox.className = "card-buttons";

    btnBox.appendChild(detailsBtn);
    btnBox.appendChild(favIcon);
    card.appendChild(btnBox);

    /* FAVORITE */
    favIcon.addEventListener("click", () => {
      saveFavorite(animal);
      favIcon.textContent = "💖";
    });

    /* DETAILS */
    detailsBtn.addEventListener("click", () => {
      saveLastViewed(animal);
      window.location = "animal.html";
    });

    /* HOVER */
    card.addEventListener("mouseenter", () => card.classList.add("hover"));
    card.addEventListener("mouseleave", () => card.classList.remove("hover"));

    container.appendChild(card);
  });
}
