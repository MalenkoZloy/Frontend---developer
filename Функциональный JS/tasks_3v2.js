/*
Если не знакомы с DOM-деревом:

3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
примеры вызова функции
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)
*/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // должно выводить  120
console.log(factorial(0)); // должно выводить  1