'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= 100; i ++) {
    sum = sum + i;
}
console.log(sum);