const KEY='favorites';

export function getFavorites(){
  return JSON.parse(localStorage.getItem(KEY)||'[]');
}
export function toggleFavorite(id){
  const f=getFavorites();
  const i=f.indexOf(id);
  i>=0?f.splice(i,1):f.push(id);
  localStorage.setItem(KEY,JSON.stringify(f));
}
export function isFavorite(id){
  return getFavorites().includes(id);
}
