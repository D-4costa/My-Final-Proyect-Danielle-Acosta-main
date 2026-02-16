// js/dogapi.js
import { dogNames, getRandomName } from "./petnames.js";

export async function getDogs(amount = 6) {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random/${amount}`);
    const data = await res.json();

    return data.message.map((img, index) => ({
      id: "dog-" + Date.now() + "-" + index,
      type: "dog",
      name: getRandomName(dogNames),
      image: img
    }));

  } catch (err) {
    console.error("Dog API failed:", err);
    return [];
  }
}

