// js/catapi.js
import { catNames, getRandomName } from "./petnames.js";

export async function getCats(amount = 6) {
  try {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${amount}`);
    const data = await res.json();

    return data.map((cat, index) => ({
      id: "cat-" + Date.now() + "-" + index,
      type: "cat",
      name: getRandomName(catNames),
      image: cat.url
    }));

  } catch (err) {
    console.error("Cat API failed:", err);
    return [];
  }
}
