//1. Write a function named processNumbers that accepts an array and a callback. The callback should double each number and return the result.
 function processNumbers(arr , callback)
{
    callback(arr);
}

function doubleNumber(arr)
{
    let numbers = arr.map(a=> a + a);
    console.log(numbers);
}

const nums = [1,2,3,4,5,6,7];

processNumbers(nums,doubleNumber);

// 2. Create a function fetchData that simulates data fetching using setTimeout and takes a callback to run when data is "fetched".

// function fetchData(callback)
// {
//     console.log("Fetching Data......")
//     callback(9999);
// }

// setTimeout(fetchData(), 2000)

//3. Write a higher-order function calculator that takes two numbers and a callback function to perform operations like add, subtract, etc.

function calculator(num1 , num2 , callback)
{
   let res = callback(num1, num2);
   console.log("Result is: " , res);
}

function Add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
        return num1 > num2 ? num1 - num2 : num2 > num1 ? num2 - num1 : 0;
}

calculator(10,20,Add);
calculator(90,41,subtract);

//4. Create a function repeatAction that takes a function and a number n, and calls the function n times.

function repeatAction(cnt, callback)
{
    for(let i=0 ; i<cnt ; i++)
        callback(i);
}

function PrintMessage(cnt)
{
    console.log(`Printing Message for ${cnt + 1} time`)
}

repeatAction(2,PrintMessage);
