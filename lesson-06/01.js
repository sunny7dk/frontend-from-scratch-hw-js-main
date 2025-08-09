/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

const numbers = [1, 2, 3, 4, 5];

const filter = (num, callBack) => {
  let newFilter = [];
  for (let i = 0; i < num.length; i++) {
    if (callBack(num[i], i)) {
      newFilter.push(num[i]);
    }
  }
  return newFilter;
}

const result = filter(numbers, (element, index) => {
  return element % 2 !== 0;
});

console.log(result);







// const myBooks = [
//     {
//         id: 1,
//         title: 'Head First JavaScript Programming',
//         author: 'Eric Freeman',
//         price: 29.99,
//         genre: 'Programming',
//     },
//     {
//         id: 2,
//         title: 'You Don’t Know JS',
//         author: 'Kyle Simpson',
//         price: 39.99,
//         genre: 'Programming',
//     },
//     {
//         id: 3,
//         title: 'JavaScript: The Definitive Guide',
//         author: 'David Flanagan',
//         price: 49.99,
//         genre: 'Programming',
//     },
//     {
//         id: 4,
//         title: 'Lord of the Rings',
//         author: 'J.R.R. Tolkien',
//         price: 29.99,
//         genre: 'Fantasy',
//     },
//     {
//         id: 5,
//         title: 'The Witcher',
//         author: 'Andrzej Sapkowski',
//         price: 19.99,
//         genre: 'Fantasy',
//     },
// ];

// const filter = (books, callBack) => {
//   let newFilter = [];
//   for (let i = 0; i < books.length; i++) {
//     if (callBack(books[i].price, i)) {
//       newFilter.push(books[i].price);
//     }
//   }
// }

// const result = filter(myBooks, callBack(element, index) => {
  
// })






