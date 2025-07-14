//Question 1
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// Get the first three elements using slice

const res = fruits.slice(0,3);
console.log("first three elements" , res)

//Question 2
const numbers = [1, 2, 3, 4, 5];
// Use slice to get [3, 4] from the array

const res1 = numbers.slice(2,4);
console.log("res1 is" , res1)

//Question 5
const arr = [10, 20, 30, 40, 50];
// Use splice to remove 2 elements starting from index 2

arr.splice(2,2);
console.log(arr);

//Question 6
const names = ['Alice', 'Bob', 'Charlie'];
// Replace 'Bob' with 'David' using splice

names.splice(1,1, "David");
console.log(names);

//Question 7
const a = [1, 2, 3];
const b = [4, 5];
// Merge arrays a and b into a new array using spread operator

const arr1 = [...a, ...b]
console.log(arr1);

//Question 8
const obj1 = { x: 1 };
const obj2 = { y: 2 };
// Combine both objects into a new object using spread

const obj3 = {...obj1 , ...obj2}
console.log(obj3);

//Question 10
function sum(...args) {
  return args.reduce((total, n) => total + n);
}

console.log(sum(1, 2, 3)); // Output: 6

//Question 11
function firstAndRest(a, ...rest) {
  console.log("First:", a);
  console.log("Rest:", rest);
}
firstAndRest(10, 20, 30, 40);

//Question 12
const { a3, ...rest } = { a3: 1, b: 2, c: 3 };
// Log values of 'a' and 'rest'

console.log("a3" , a3 );
console.log("rest" , {...rest});