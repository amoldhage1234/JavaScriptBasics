console.log('Start');
function greet() {
  console.log('Hello');
}
greet();
console.log('End');  

/*
Start
Hello
End
*/

var x = 10;
function print() {
  console.log(x);
  var x = 20;
}
print(); // undefined


let a = 1;
function foo() {
  console.log(a); // Ref Err
}
function bar() {
  let a = 2;
  foo();
}
bar();

function test() {
  console.log(a1);
  var a1 = 5;
}
test();  // undefind


var a2 = 1;
function outer() {
  function inner() {
    console.log(a2);
  }
  var a2 = 2;
  inner(); //2
}
outer();


console.log('Question6 1');
setTimeout(() => console.log('2'), 0);
console.log('3');    // 1 3 2

// Question 7
setTimeout(() => console.log('A'), 0);
//for(let i = 0; i < 1000000000; i++) {}
console.log('B'); // B A

//Question 8

console.log("Question 8")
console.log('A');
setTimeout(() => console.log('B'), 1000);
setTimeout(() => console.log('C'), 0);
console.log('D');  // A D C B

//Question 10
setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 0);
console.log('Synchronous');  // Synchronous  Timeout 1 Timeout 2

//Question 11
console.log('Question 11'); 
const promise = new Promise((resolve, reject) => {
  console.log('Inside Promise');
  resolve(5);
});
promise.then(val => console.log('Resolved with', val));
console.log('Outside Promise'); // Inside Promise Outside Promise Resolved with 5

//Question 12
Promise.resolve().then(() => {
  console.log('Then 1');
}).then(() => {
  console.log('Then 2');
});
console.log('Sync');  // Sync Then 1 Then 2

console.log('Question 13'); 
new Promise((resolve, reject) => {
  resolve('Done');
}).then(data => {
  console.log(data);  // Done
});


console.log('Question 14');
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");

/*
Start
End
Promise 1
Promise 2
Timer
*/

console.log('Question 15');
Promise.resolve(12)
  .then((x) => {
    console.log(x);
    return x + 1;
  })
  .then((x) => {
    console.log(x);
  });  // 12 13

  //Question 16
Promise.reject('Error')
  .then(() => {
    console.log('Question 16 Success');
  })
  .catch(err => {
    console.log("Question 16" , err);
  }); //Error

  //Question 17
Promise.resolve('First')
  .then(data => {
    console.log(data);
    return Promise.resolve('Second');
  })
  .then(data => {
    console.log(data);
  });

  /*
  First
  Second
  */

  
Promise.resolve().then(() => console.log('Question 18 A'));
console.log('Question 18 B');

/**
 * Question 18 B 
 * Question 18 A
 */

//Question 19
console.log("one");

setTimeout(() => {
  console.log("two");
}, 0);

Promise.resolve().then(() => {
  console.log("three");
});

console.log("four");

// one four three two

//Question 20
new Promise((resolve, reject) => {
  console.log('First11');
  setTimeout(() => {
    console.log('Second11');
    resolve();
  }, 0);
}).then(() => {
  console.log('Third11');
});

// First11 Second11 Third11

//Question 21
Promise.resolve().then(() => {
  console.log('Question 21 Promise A');
});
console.log('Question 21 End');

//  Question 21 End uestion 21 Promise A

//Question 22
setTimeout(() => {
  console.log('Timer Done');
}, 0);
Promise.resolve().then(() => {
  console.log('Microtask Done');
});
console.log('Script End');

/**
 * Script End
 * Microtask Done'
 * Timer Done
 */


//Question 23
Promise.resolve('****************Hi')
  .then(data => {
    console.log(data);
    throw new Error('************Oops');
  })
  .catch(err => {
    console.log(err.message);
  });   // Hi Oops

  //Question 24
Promise.resolve()
  .then(() => {
    console.log('##First');
    return Promise.resolve();
  })
  .then(() => {
    console.log('##Second');
  });  // ##First  ##Second


 // Question 25
Promise.reject('Fail')
  .catch(err => {
    console.log('Caught:', err);
    return 'Recovered';
  })
  .then(res => {
    console.log('Then after catch:', res);
  });
  /**
   * Caught Fail
   * Then after catch: Recovered
   *
   */