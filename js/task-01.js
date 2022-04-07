const cStyle =
  'color: tomato; background: #222; padding: 3px 0px 3px 6px; border-radius: 4px 0px 0px 4px';
const cStyle2 =
  'color: lime; background: #222; padding: 3px 6px 3px 0px; border-radius: 0px 4px 4px 0px';

const categories = document.querySelector('#categories');
// const list = Array.from(categories.children);
const list = [...categories.children];

const listLength = list.length;
console.log(
  `%cNumber of categories: %c${listLength}`,
  cStyle,
  cStyle2
);

list.forEach((el) => {
  const title = el.firstElementChild.outerText;
  const numberOfElements = el.lastElementChild.children.length;
  console.log(`%cCategory: %c${title}`, cStyle, cStyle2);
  console.log(`%cElements: %c${numberOfElements}`, cStyle, cStyle2);
});
