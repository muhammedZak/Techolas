// const para = document.createElement('p');
// para.innerHTML = 'HELLO WORLD';
// const div = document.querySelector('.container').appendChild(para);
// console.log(div)
/* 
const lists = document.querySelector('.lists');
const list = document.createElement('li');
['item1', 'item2', 'item3'].forEach((item) => {
  list.innerText = item;
  lists.appendChild(list);
});
 */
const para = document.querySelector('.para');

const button = document.querySelector('button');

button.addEventListener('click', () => para.remove());
