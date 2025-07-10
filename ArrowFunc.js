
//1. multiply
let multiply = (x,y) => x*y;

console.log("Multiplication is : " + multiply(4,7));

//2. square 

let square =(input) => input * input;
console.log("square of 3 is : " + square(3));
console.log("square of 6 is : " + square(6));
console.log("square of 9 is : " + square(9));

//3. Write an arrow function called greet that takes a name as a parameter and logs a greeting message. If no name is provided, use the default value "Guest". Test the function with and without providing a name.
let greet = (name) => {
    if(name)
        console.log("Name is: " , name)
    else
        console.log("Name is Guest")
}

console.log(greet("Hello World!"));
console.log(greet());
