//1. Use a for...in loop to iterate over the properties of the following object and log each key and its value to the console:
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};

for(const c in car)
{
    console.log(`Key:  ${c} & value: ${car[c]}` );
}

//2. Use a for...in loop to count the number of properties in the following object:

const student = {
  name: 'Alice',
  age: 21,
  grade: 'A',
  enrolled: true
};

let count =0;
for(const stud in student)
{
  count++;
}

console.log("Number of properties student", count);

//3. Use a for...in loop to create an array of all the keys in the following object:

const book = {
  title: '1984',
  author: 'George Orwell',
  pages: 328
};

let arr = new Array();

for(const b in book)
{
  arr.push(b);
}

console.log(arr);