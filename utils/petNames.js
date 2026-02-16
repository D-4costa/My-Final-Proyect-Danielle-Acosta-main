const dogNames = [
  "Max","Charlie","Cooper","Buddy","Rocky","Bear","Duke","Toby","Leo","Milo",
  "Zeus","Apollo","Thor","Bruno","Simba","Bentley","Oreo","Shadow","Lucky","Finn",
  "Rex","Sam","Coco","Buster","Marley","Louie","Gizmo","Ace","Jasper","Boomer"
];

const catNames = [
  "Luna","Bella","Kitty","Lily","Nala","Chloe","Lucy","Milo","Oliver","Leo",
  "Simba","Oreo","Shadow","Tiger","Smokey","Cleo","Jasper","Willow","Pumpkin","Salem",
  "Pepper","Mochi","Coco","Binx","Mittens","Snowball","Ash","Nova","Zoe","Ivy"
];

export function getRandomName(type, id) {
  const list = type === "Dog" ? dogNames : catNames;

  // usar id como seed → SIEMPRE MISMO NOMBRE PARA MISMO ANIMAL
  const index = hashCode(id.toString()) % list.length;

  return list[Math.abs(index)];
}

/* convierte string en numero consistente */
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}
