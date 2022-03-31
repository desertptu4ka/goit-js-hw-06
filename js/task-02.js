const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');
const listArr = [];
ingredients.forEach(ingr => {
  const el = document.createElement('li');
  el.innerHTML = ingr;
  el.classList.add('item');
  listArr.push(el);
});
ul.append(...listArr);
