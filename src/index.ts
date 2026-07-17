const test = "test TypeScript";
console.log(test);

// data types  => type annotations or signature
// string, number, boolean and any if type is not known

let theName = "ahmed gouda";
// theName = 10;
// here we cant reassign theName with number cause the compiler
// concluded that theName is a string from the value passed

let theAge; // here he assumes that type is any cause we didnt declare
// and also we can declare it this way
let title: any; // now we can assign title any value

let depends: string | number;
depends = "changable";
depends = 100;
// depends = true; // error cause we didnt mention it can be boolean
// also we can declare it with value
let all: string | number = "all";

const myArr1: string[] = ["abc", "def", "ghk"];
// in this arr if we pushed a number we will get error

// const myArr2: string[] | number[] = ["abc", "def", "ghk", 10];
// here we got error cause this means arr either strings or numbers
// we cant add both the right declare is
const myArr3: (string | number)[] = ["abc", "def", "ghk", 10];

// multidimensional arrays
const myArr4: (string | number | (string | number | (string | number)[])[])[] =
  ["abc", "def", "ghk", 10, 20, ["sfh", 30, ["skd", 40]]];
// this is 3 arr in

// the string after add() is a type annotation for the function output
function add(n1: number, n2: string): string {
  return n1 + n2;
}
console.log(add(5, "15"));
// if we changed the n2 type to be number we will get an error
// as the output of the function will be a number not a string

// ? is for optional parameters and it's must be in the last after required parameters
function sum(n1: number = 1, n2?: number) {
  return `${n1}, ${n2}`;
}
console.log(sum(undefined));
// we passed undefined the compiler will take the default value for n1 and n2 is optional

const addNums = function (...nums: number[]): number {
  let result = 0;
  nums.forEach((num) => (result += num));
  return result;
};
console.log(addNums(3, 4, 5.5, +true));

const addNumsArrow = (n1: number, n2: number): number => n1 + n2;
console.log(addNumsArrow(1, 2));
