//Question 1
console.log(a);  // undefined
var a = 10;

// Question 2
//console.log(b);  //ReferenceError: Cannot access 'b' before initialization
let b = 20;

// Question 3
var x = 1;
function test() {
  console.log(x); // undefined
  var x = 2;
}
test();

//Question 4
//let a = 5;
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
const fn = outer();  // SyntaxError: Identifier 'a' has already been declared
fn();

// Question 5
const ab = 10;
//ab = 20;
console.log(ab); // yntaxError: Identifier 'a' has already been declared

//Question 6
var val1 = 10;
(function() {
  console.log("val1 is:" , val1);
  var val1 = 5;
})();   // undefined

//Question 7
let val2 = 10;
{
  let val2 = 20;
  console.log(val2); //20
}
console.log(val2); //10

//Question 8
(function() {
  //console.log(val3);
  let val3 = 15;
})();   //ReferenceError: Cannot access 'val3' before initialization

//Question 9
function foo() {
  if (true) {
    var x = 5;
  }
  console.log(x);
}
foo(); //5

//Question 10
function foo() {
  if (true) {
    let x1 = 5;
  }
  //console.log(x1);
}
foo();   //ReferenceError: x1 is not defined

// Question 11
console.log(typeof a1);  // undefined
var a1 = 'hello';

//Question 12
//console.log(typeof b1);  //ReferenceError: Cannot access 'b1' before initialization
let b1 = 'hello';  

//Question 13
function outer() {
  var x = 10;
  function inner() {
    console.log(x);
  }
  x = 20;
  return inner;
}
const innerFn = outer(); // 20
innerFn();

//Question 14
var a2 = 1;
function test() {
  console.log(a2);
  var a2 = 2;
  console.log(a2);
}
test(); // undefined 2 

//Question 15
let a3 = 1;
function one() {
  let a3 = 2;
  function two() {
    console.log("a3 is:" , a3);
  }
  return two;
}
const func = one();  // 2
func();
