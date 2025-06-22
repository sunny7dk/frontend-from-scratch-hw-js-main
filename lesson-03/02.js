// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

const a = 6;
function isEven(num_a) {
    let b;
    if (num_a % 2 === 0) {
        b = true;
    } else {
        b = false;
    }

    return b;
}

let result = isEven(a);
console.log(result);