"use strict";
let num = 10;
console.log(num * "jiack");

// let number = prompt("Введіть число: ");
// let square = Math.pow(parseInt(number), 2);
// console.log("Квадрат числа", number, "дорівнює", square);

// let name = prompt("Введіть Ваше ім'я: ");
// let depositAmount = parseFloat(prompt("Введіть суму депозиту: "));
// let depositTerm = parseInt(prompt("Введіть термін депозиту у місяцях: "));

// let annualInterestRate = 0.2; // 20% річних
// let monthlyInterestRate = annualInterestRate / 12;
// let interestEarned = depositAmount * monthlyInterestRate * depositTerm;

console.log(
  `Шановний ${name}, Ви внесли ${depositAmount.toFixed(2)} грн., під ${
    annualInterestRate * 100
  }% річних, на термін ${depositTerm} місяців. За цей період часу Ви заробите ${interestEarned.toFixed(
    2
  )} грн.`
);

let a = parseFloat(prompt("Введіть число a: "));
let b = parseFloat(prompt("Введіть число b: "));

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log(`Сума: ${sum}`);
console.log(`Різниця: ${difference}`);
console.log(`Добуток: ${product}`);
console.log(`Частка: ${quotient}`);
