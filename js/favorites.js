import { getFavorites } from './utils/storage.js';
import { getAnimalById } from './api/petfinder.js';
import { animalCard } from './components/animalCard.js';

const container=document.getElementById('favorites');

async function init(){
  const favs=getFavorites();
  for(const id of favs){
    const a=await getAnimalById(id);
    container.appendChild(animalCard(a));
  }
}
init();
