const itemElm = document.querySelector('#categories');
const listElm = itemElm.querySelectorAll('.item');
console.log(`Number of categories: ${listElm.length}`);

listElm.forEach(li => {
  const titleElm = li.querySelector('h2').textContent;
  console.log(`Category: ${titleElm}`);
  const liElm = li.querySelectorAll('ul li');
  console.log(`Elements: ${liElm.length}`);
});
