const KEY = "favoriteAnimals";

/* Obtener favoritos */
export function getFavorites() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

/* Guardar favoritos */
export function saveFavorites(favs) {
  localStorage.setItem(KEY, JSON.stringify(favs));
}

/* Agregar o quitar favorito */
export function toggleFavorite(animal) {
  let favs = getFavorites();

  const exists = favs.find(a => a.id === animal.id);

  if (exists) {
    favs = favs.filter(a => a.id !== animal.id);
  } else {
    favs.push(animal);
  }

  saveFavorites(favs);
  return favs;
}

/* Verificar favorito */
export function isFavorite(id) {
  return getFavorites().some(a => a.id === id);
}

