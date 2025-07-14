//Question 13
const person = { name: "Alice", age: 25, job: "Engineer" };
// Use Object.keys to get all keys from person

const keys = Object.keys(person);
console.log(keys); 

//Question 14
const scores = { math: 90, science: 85, english: 88 };
// Use Object.values to get an array of all scores
const values = Object.values(scores);
console.log(values); 

//Question 15
const settings = { theme: "dark", layout: "grid" };
// Use Object.entries to iterate and log key-value pairs
const res = Object.entries(settings);
console.log(res);