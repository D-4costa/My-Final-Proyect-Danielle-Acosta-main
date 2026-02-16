import { getPetName } from "../utils/petNames.js";

const CAT_API = "https://api.thecatapi.com/v1/images/search?limit=12";

export async function fetchCats() {
  try {
    const res = await fetch(CAT_API);
    const data = await res.json();

    if (!Array.isArray(data)) return [];

    return data.map((cat) => ({
      id: "cat-" + hash(cat.url), // ⭐ ID estable
      name: getPetName("Cat", cat.url),
      type: "Cat",
      age: randomAge(),
      energy: randomEnergy(),
      size: "Small",
      image: cat.url,
      personality: randomPersonality()
    }));

  } catch (err) {
    console.error("Cat API failed", err);
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

function randomPersonality() {
  return ["Independent","Lazy","Cuddly","Curious","Chaotic"][Math.floor(Math.random()*5)];
}
