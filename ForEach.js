//1. Use the forEach method to iterate over the following array and log each element to the console:

const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log("Fruit Names : ")
fruits.forEach(function(fruit){
    console.log(fruit);
});

//2. Use the forEach method to double each element in the given array and store the results in a new array:

const numbers = [1, 2, 3, 4, 5];
let arr = new Array();

numbers.forEach(function(num){
    let output = num + num;
    arr.push(output);
})

console.log(arr);

//3 . Calculate and log the sum of all elements in the following array using the forEach method:

const prices = [20, 30, 15, 10, 25];
let sum = 0;

prices.forEach(function(num){
    sum = sum + num;
});

console.log("sum of array elements is :", sum)

//4. Iterate over the properties of the following object and log each key-value pair to the console using forEach:

const person = { name: 'John', age: 25, job: 'developer' };

person.forEach(function(key , value){
    console.log(`key : ${key} & value : ${value}`);
});
