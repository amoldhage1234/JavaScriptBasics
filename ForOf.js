//1. Use a for...of loop to log each character of the following string:

const greeting = "Hello";

for(const val of greeting)
{
    console.log(val);
}

//2. Use a for...of loop to calculate the total of the following array:

const scores = [10, 20, 30, 40];
let total= 0;
for(const num of scores)
{
    total = total + num;
}

console.log("total is: " , total);

//3. Use a for...of loop to push only the even numbers into a new array:

const numbers = [1, 2, 3, 4, 5, 6];

let evenNums = new Array();
for(const num of numbers)
{
    if(num%2 == 0)
        evenNums.push(num);
}

console.log("Even numbers : ", evenNums);