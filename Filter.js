//1. Given an array of objects, use the filter method to return an array containing only objects where the price property is greater than 50.
//2. Filter the students array to get only the students who are 25 years or older.

const students = [ { name: 'Alice', age: 25, grade: 'A' }, { name: 'Bob', age: 22, grade: 'B' }, { name: 'Charlie', age: 27, grade: 'C' }, { name: 'David', age: 20, grade: 'A' }];

let ageFilter = students.filter(function(stud){
    return stud.age > 20;
})

console.log(ageFilter);

// 3. Create an array of students who have an 'A' grade in the students array
let gradeA = students.filter(function(stud){
    return stud.grade === 'A';
})

console.log(gradeA);

//4. Create an array of names from the students array that have less than 6 characters.

let nameLen = students.filter(function(stud){
    return stud.name.length > 6;
})

console.log(nameLen);

//5. Filter the students array to get only the students who have a grade of 'B'.

let gradeB = students.filter(function(stud){
    return stud.grade === 'B';
})

console.log(gradeB);

//6. Filter the fruits array to include only fruits that contain the letter 'a'.
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']; 

let filterFruit = fruits.filter(function(fruit){
    return fruit.includes('a');
})

console.log(filterFruit);



