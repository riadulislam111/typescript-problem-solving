"use strict";
// Problem: 1
function printUser(name, age) {
    return `${name} is ${age} years old`;
}
// console.log(printUser("Amina", 22));
// Problem: 2
let name = "Laptop";
let price = 45000;
let isAvailable = true;
// console.log(`${name} cost ${price} and is available: ${isAvailable}`);
// Problem: 3
const students = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];
// console.log(`Total Student: ${students.length}`);
// Problem: 4
const person = ["Amina", 22];
// console.log(`${person[0]} is ${person[1]} years old.`);
// Problem: 5
const userObj = {
    name: "Amina",
};
// console.log(`Name: ${userObj.name}, Email: ${userObj.email ?? "Not provided"}`);
// Problem: 6
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}
// console.log(isEven(8));
// Problem: 7
function sumAll(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sumAll(1, 2, 3, 4));
