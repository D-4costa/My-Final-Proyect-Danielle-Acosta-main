export function animalCard(a){
  const d = document.createElement('div');
  d.className = 'card';
  d.innerHTML = `
    <img src="${a.photo}" alt="${a.name}">
    <h3>${a.name}</h3>
    <p>${a.type} • ${a.age}</p>
    <a href="./animal.html?id=${a.id}">
      <button>View Details</button>
    </a>
  `;
  return d;
}
