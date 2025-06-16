const number = 20;
const divider = 2;
let sum = 0;

let i = 0;

while (i < number) {
    if (i % divider === 1) {
    sum += i;
    console.log(sum);
    }
    i++;
}