// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

const a = 2;
function isEven(num_a) {
    c = num_a % 2 === 0;
    return c;
}

let result = isEven(a);
console.log(result);