export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function saveFavorite(animal) {
  const favs = getFavorites();
  if (!favs.find(a => a.id === animal.id)) {
    favs.push(animal);
    localStorage.setItem("favorites", JSON.stringify(favs));
    alert("Added to favorites ❤️");
  }
}

