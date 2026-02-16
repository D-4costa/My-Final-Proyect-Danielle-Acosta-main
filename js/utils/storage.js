const FAV_KEY = "favorites";
const LAST_KEY = "lastViewed";

/* ---------- FAVORITES ---------- */

export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
}

export function isFavorite(id) {
  return getFavorites().some(a => a.id === id);
}

export function toggleFavorite(animal) {
  let favs = getFavorites();

  if (isFavorite(animal.id)) {
    favs = favs.filter(a => a.id !== animal.id);
  } else {
    favs.push(animal);
  }

  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

/* ---------- LAST VIEWED ---------- */

export function saveLastViewed(animal) {
  localStorage.setItem(LAST_KEY, JSON.stringify(animal));
}

export function getLastViewed() {
  return JSON.parse(localStorage.getItem(LAST_KEY));
}
