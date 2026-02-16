import { getFavorites, toggleFavorite } from "./utils/storage.js";

const container = document.getElementById("favorites");

function renderFavorites() {
  container.innerHTML = "";
  const favs = getFavorites();

  if (!favs.length) {
    container.innerHTML = "<p>No favorites yet 🐾</p>";
    return;
  }

  favs.forEach(animal => {

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = animal.image;
    img.alt = animal.name;

    const title = document.createElement("h3");
    title.textContent = animal.name;

    const info = document.createElement("p");
    info.textContent = `${animal.type} • ${animal.age}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "💔 Remove";

    removeBtn.addEventListener("click", () => {
      toggleFavorite(animal);
      renderFavorites();
    });

    card.append(img, title, info, removeBtn);
    container.appendChild(card);
  });
}

window.addEventListener("load", renderFavorites);
