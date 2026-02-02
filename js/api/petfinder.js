// MOCK DATA – Replace with real API safely
const animals=[
 {id:'1',name:'Luna',type:'Dog',age:'Young',photo:'https://place-puppy.com/500x400',description:'Friendly and playful dog'},
 {id:'2',name:'Milo',type:'Cat',age:'Adult',photo:'https://placekitten.com/500/400',description:'Calm and loving cat'}
];

export async function getAnimals(){
  return new Promise(r=>setTimeout(()=>r(animals),500));
}
export async function getAnimalById(id){
  return animals.find(a=>a.id===id);
}
