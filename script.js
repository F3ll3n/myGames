
//Задача 1. Сложить сумму всех чётных чисел массива в корне

//Исходный массив
let numArr =  [1, 4, 3, 0, 4, 5, 4];
//  Присваиваем sum; .filter убирает все нечетные; .map возводит всё в корень; .reduce складывает всю сумму в одно число.
let sum = numArr.filter(element => !(element % 2)).map((x) => Math.sqrt(x)).reduce((accum, currentEl) => accum + currentEl);
console.log(sum);