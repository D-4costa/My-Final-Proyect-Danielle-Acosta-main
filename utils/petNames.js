// js/petnames.js

export const dogNames = [
  "Max", "Luna", "Rocky", "Milo", "Toby",
  "Bella", "Daisy", "Simba", "Coco", "Zeus",
  "Nala", "Thor", "Bobby", "Kira", "Bruno",
  "Rex", "Oreo", "Leo", "Chester", "Lucky"
];

export const catNames = [
  "Misty", "Oliver", "Kitty", "Shadow", "Loki",
  "Simba", "Nina", "Salem", "Pumpkin", "Mochi",
  "Felix", "Tom", "Garfield", "Kiwi", "Snowball",
  "Luna", "Milo", "Chloe", "Pepper", "Sushi"
];

// función util para elegir nombre aleatorio
export function getRandomName(list) {
  return list[Math.floor(Math.random() * list.length)];
}
