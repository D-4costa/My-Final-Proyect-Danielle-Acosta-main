import { toggleFavorite, isFavorite } from "./storage.js";

/**
 * Creates a visual card element for an animal
 * @param {Object} a - animal object from API
 * @returns {HTMLElement}
 */
export function animalCard(a) {

  const card = document.createElement("div");
  card.className = "card fade-in";

  // Determinar si ya es favorito
  const heart = isFavorite(a.id) ? "❤️" : "🤍";

  card.innerHTML = `
    <img src="${a.photo}" alt="${a.name}">
    <h3>${a.name}</h3>
    <p>${a.type} • ${a.age}</p>

    <div class="card-buttons">
      <a href="./animal.html?id=${a.id}" class="details-link">
        <button class="details-btn">View Details</button>
      </a>

      <button class="fav-btn" aria-label="favorite">${heart}</button>
    </div>
  `;

  // ===== FAVORITES BUTTON =====
  const favBtn = card.querySelector(".fav-btn");

  favBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavorite(a);

    // actualizar icono
    favBtn.textContent = isFavorite(a.id) ? "❤️" : "🤍";
  });

  // ===== HOVER EFFECT (extra interaction rubric) =====
  card.addEventListener("mouseenter", () => {
    card.classList.add("hover");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hover");
  });

  return card;
}
