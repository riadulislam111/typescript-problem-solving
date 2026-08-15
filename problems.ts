// Problem: 1
function printUser(name: string, age: number): string {
  return `${name} is ${age} years old`;
}

// console.log(printUser("Amina", 22));

// Problem: 2
let name: string = "Laptop";
let price: number = 45000;
let isAvailable: boolean = true;

// console.log(`${name} cost ${price} and is available: ${isAvailable}`);

// Problem: 3
const students: string[] = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];

// console.log(`Total Student: ${students.length}`);

// Problem: 4
const person: [string, number] = ["Amina", 22];

// console.log(`${person[0]} is ${person[1]} years old.`);

// Problem: 5
const userObj: { name: string; email?: string } = {
  name: "Amina",
};

// console.log(`Name: ${userObj.name}, Email: ${userObj.email ?? "Not provided"}`);

// Problem: 6
function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

// console.log(isEven(8));

// Problem: 7
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

// console.log(sumAll(1, 2, 3, 4));

// Problem: 8
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];


let mergeArray:number []= [...array1 , ...array2] 

// console.log(mergeArray);


// Problem: 9
let number:number= 5;

let num:string = number > 0? "Positive": "Negative";
// console.log(num);


// Problem: 10
function userName(user:string = "Guest"):string{
  return user;
}
// console.log(userName());



// Problem: 11
function varName(name:unknown):string{
if(typeof name === "string") {
  return name;
}
return "";
}

// console.log(varName("Hello"));




// Problem: 12
let userData:{name:string, age: number, email: string, skills:string[], active:boolean} = {
  name:"Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTMl", "CSS", "TypeScript"],
  active: true
} 

// console.log(`Name: ${userData.name}`);
// console.log(`Age: ${userData.age}`);
// console.log(`Email: ${userData.email}`);
// console.log(`Skills: ${userData.skills.join(", ")}`);
// console.log(`Active: ${userData.active}`);



