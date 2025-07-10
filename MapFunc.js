const numbers = [1, 2, 3, 4, 5]; 
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']; 
const students = [ { name: 'Alice', age: 25, grade: 'A' }, { name: 'Bob', age: 22, grade: 'B' }, { name: 'Charlie', age: 27, grade: 'C' }, { name: 'David', age: 20, grade: 'A' } ];

//1. Squared Numbers: Use the map method to create a new array that contains the squares of each number in the numbers array

let squares = numbers.map(num=> num * num);
console.log("Squared Numbers: " , squares);

//2. Uppercase Fruits: Create an array of fruits from the fruits array, but all in uppercase.

let upperCase = fruits.map(f=> f.toUpperCase());
console.log("Uppercase Fruits:" , upperCase);

//3. Age Increase: Use the map method to increase the age of each student in the students array by 2 years.

let updatedStudents = students.map(function(stud){
     stud.age = stud.age + 2;
     return stud;
})
console.log("Age Increase:" , updatedStudents);

// 4. Length of Names: Create an array of numbers representing the lengths of names in the students array.

let lenArr = students.map(function(stud){
    return stud.name.length;
})

console.log("Length of Names:" , lenArr);

// 5. First Letter Capitalized: Create an array of strings from the fruits array where each fruit's first letter is capitalized.
let camalCase = fruits.map(function(fruit){
    return fruit.replace(fruit[0], fruit[0].toUpperCase())
});

console.log("First Letter Capitalized: ", camalCase);
