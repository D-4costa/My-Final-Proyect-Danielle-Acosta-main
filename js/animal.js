import { getAnimalById } from './api/petfinder.js';
import { toggleFavorite,isFavorite } from './utils/storage.js';

const el=document.getElementById('animal-detail');
const id=new URLSearchParams(location.search).get('id');

async function init(){
  const a=await getAnimalById(id);
  el.innerHTML=`
    <img src="${a.photo}" alt="${a.name}">
    <h2>${a.name}</h2>
    <p>${a.description}</p>
    <button id="fav">${isFavorite(id)?'Remove Favorite':'Add to Favorites'}</button>
  `;
  document.getElementById('fav').onclick=()=>{toggleFavorite(id);location.reload()};
}
init();
