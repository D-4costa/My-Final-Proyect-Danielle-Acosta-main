import { catNames, getRandomName } from "../petnames.js";

const ages = ["Baby", "Young", "Adult", "Senior"];
const personalities = ["Playful", "Calm", "Independent", "Affectionate", "Lazy"];
const energies = ["Low", "Medium", "High"];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function fetchCats(count = 6) {
  try {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${count}`);
    const data = await res.json();

    return data.map((cat, i) => ({
      id: "cat-" + Date.now() + "-" + i,
      name: getRandomName(catNames),
      image: cat.url,
      type: "Cat",
      age: random(ages),
      personality: random(personalities),
      energy: random(energies)
    }));

  } catch (err) {
    console.error("Cat API error:", err);
    return [];
  }
}
