// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let a = 3;
let b = 5;
let r = 8;

function findLargest(num_a, num_b, num_r) {
    const c = Math.max(num_a, num_b, num_r);
    return c;
}

let result = findLargest(a, b, r);
console.log(result);