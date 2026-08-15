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
// console.log(sumAll(1, 2, 3, 4));
// Problem: 8
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergeArray = [...array1, ...array2];
// console.log(mergeArray);
// Problem: 9
let number = 5;
let num = number > 0 ? "Positive" : "Negative";
// console.log(num);
// Problem: 10
function userName(user = "Guest") {
    return user;
}
// console.log(userName());
// Problem: 11
function varName(name) {
    if (typeof name === "string") {
        return name;
    }
    return "";
}
// console.log(varName("Hello"));
// Problem: 12
let userData = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTMl", "CSS", "TypeScript"],
    active: true
};
// console.log(`Name: ${userData.name}`);
// console.log(`Age: ${userData.age}`);
// console.log(`Email: ${userData.email}`);
// console.log(`Skills: ${userData.skills.join(", ")}`);
// console.log(`Active: ${userData.active}`);
