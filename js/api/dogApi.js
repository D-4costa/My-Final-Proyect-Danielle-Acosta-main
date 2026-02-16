import { getPetName } from "../utils/petNames.js";

const DOG_API = "https://dog.ceo/api/breeds/image/random/12";

export async function fetchDogs() {
  try {
    const res = await fetch(DOG_API);
    const data = await res.json();

    if (!data.message) return [];

    return data.message.map((img) => ({
      id: "dog-" + hash(img), 
      name: getPetName("Dog", img),
      type: "Dog",
      age: randomAge(),
      energy: randomEnergy(),
      size: randomSize(),
      image: img,
      personality: randomPersonality()
    }));

  } catch (err) {
    console.error("Dog API failed", err);
    return [];
  }
}

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++)
    h = str.charCodeAt(i) + ((h << 5) - h);
  return Math.abs(h);
}

function randomAge() {
  return ["Baby","Young","Adult","Senior"][Math.floor(Math.random()*4)];
}

function randomEnergy() {
  return ["Low","Medium","High"][Math.floor(Math.random()*3)];
}

function randomSize() {
  return ["Small","Medium","Large"][Math.floor(Math.random()*3)];
}

function randomPersonality() {
  return ["Friendly","Calm","Playful","Shy","Protective"][Math.floor(Math.random()*5)];
}

