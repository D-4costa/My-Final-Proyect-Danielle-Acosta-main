import { animals } from "../data.js";

export async function getAnimals() {
  return new Promise(resolve => {
    setTimeout(() => resolve(animals), 200);
  });
}

export async function getAnimalByName(name) {
  return animals.find(
    animal => animal.name.toLowerCase() === name.toLowerCase()
  );
}
