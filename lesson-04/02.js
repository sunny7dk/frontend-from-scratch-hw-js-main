/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const number = [30, 31, 32, 32, 33, 34, 33];


function findUniqueElements(array) {
    let startValue = 0
    const uniqueElements = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > startValue) {
            startValue = array[i];
            uniqueElements.push(array[i]);
        }
    }
    return uniqueElements;
}

const result = findUniqueElements(number);
console.log(result);