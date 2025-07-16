let a = 1;
function foo() {
  console.log(a); //Expected - Ref Err ; Actual - 1
}
function bar() {
  let a = 2;
  foo();
}
bar();

var x = 1;
function test() {
  console.log(x); //Expected - 1 ; Actual - undefined
  var x = 2;
}
test(); 