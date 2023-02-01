const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let liList = [];
for (let i of ingredients) {
  const elem = document.createElement('li')
  elem.textContent = i
  elem.classList.add('item')
  liList.push(elem)
}

let ulElem = document.querySelector('ul#ingredients')
ulElem.append(...liList)