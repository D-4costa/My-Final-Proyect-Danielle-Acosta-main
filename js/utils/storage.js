const FAV_KEY = "favorites";
const VIEW_KEY = "lastViewed";
const THEME_KEY = "theme";

/* FAVORITES */
export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
}

export function saveFavorite(animal) {
  const favs = getFavorites();

  if (!favs.find(a => a.id === animal.id)) {
    favs.push(animal);
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  }
}

/* LAST VIEWED */
export function saveLastViewed(animal) {
  localStorage.setItem(VIEW_KEY, JSON.stringify(animal));
}

export function getLastViewed() {
  return JSON.parse(localStorage.getItem(VIEW_KEY));
}

/* THEME */
export function toggleTheme() {
  const theme = localStorage.getItem(THEME_KEY) === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, theme);
  document.body.dataset.theme = theme;
}

export function loadTheme() {
  document.body.dataset.theme = localStorage.getItem(THEME_KEY) || "light";
}

