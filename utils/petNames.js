const dogNames = [
  "Max","Charlie","Cooper","Buddy","Rocky","Bear","Duke","Toby",
  "Tucker","Jake","Zeus","Leo","Milo","Bentley","Ollie","Jasper",
  "Finn","Louie","Gus","Murphy","Winston","Sam","Henry","Oscar"
];

const catNames = [
  "Luna","Bella","Kitty","Lily","Nala","Chloe","Cleo","Mochi",
  "Simba","Milo","Leo","Oreo","Shadow","Pumpkin","Jasper","Smokey",
  "Willow","Tiger","Coco","Pepper","Zoe","Mimi","Poppy","Binx"
];

function hash(str){
  let h = 0;
  for(let i=0;i<str.length;i++)
    h = str.charCodeAt(i) + ((h<<5)-h);
  return Math.abs(h);
}

export function getPetName(type, seed){
  const list = type === "Dog" ? dogNames : catNames;
  return list[hash(seed) % list.length];
}
