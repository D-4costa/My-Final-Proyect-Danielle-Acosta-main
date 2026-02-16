import { dogNames, getRandomName } from "../petnames.js";

const ages = ["Baby", "Young", "Adult", "Senior"];
const personalities = ["Playful", "Calm", "Shy", "Friendly", "Curious"];
const energies = ["Low", "Medium", "High"];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function fetchDogs(count = 6) {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
    const data = await res.json();

    return data.message.map((img, i) => ({
      id: "dog-" + Date.now() + "-" + i,
      name: getRandomName(dogNames),
      image: img,
      type: "Dog",
      age: random(ages),
      personality: random(personalities),
      energy: random(energies)
    }));

  } catch (err) {
    console.error("Dog API error:", err);
    return [];
  }
}
