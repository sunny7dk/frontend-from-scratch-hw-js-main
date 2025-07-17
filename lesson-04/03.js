/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const number = [30, 31, 32, 32, 33, 34, 33];
const number2 = [23, 31, 32, 29, 28, 24, 33];


function includesElement(array, accordanceValueToArray) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === accordanceValueToArray) {
            return true;
        }
    }
    return false;
}


function findCommonElements(array1, array2) {
    const commonElements = [];
    for (let i = 0; i < array1.length; i++) {
        const currentElement = array1[i];
        if (includesElement(array2, currentElement)) {
            if (!includesElement(commonElements, currentElement)) {
                commonElements.push(currentElement);
            }
        }
    }

    return commonElements;
}

const result = findCommonElements(number, number2);
console.log(result);
