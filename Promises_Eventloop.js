//Create a promise that resolves with the message "Hello, Promise!" after 1 second. Log the resolved value to the console.
setTimeout(() => {
    Promise.resolve().then(() => {
  console.log("Hello, Promise!");
})}, 1000);

//Create a promise that resolves to the number 10. Chain .then() to multiply the number by 2, then subtract 4, and finally log the result.

Promise.resolve(10)
  .then((x) => x * 2)
  .then((x) => {
    x= x-4;
    console.log('Resolved with', x);
  });

  //Create a promise that rejects with an error message "Something went wrong". Catch the error and log it to the console.
  Promise.reject('Something went wrong')
  .catch(err => {
    console.log('Error: ', err);
  });

  //Create a promise that resolves to "First", and inside its .then() handler, return another promise that resolves to "Second". Log both results in sequence.

Promise.resolve("First")
.then((msg1)=> {
    console.log(msg1);
    Promise.resolve("Second").then((msg2) => console.log(msg2))
})

//What is the output of the following code? Why?

Promise.resolve("Initial")
  .then(value => {
    console.log(value);
    "No Return";
  })
  .then(value => {
    console.log("Second then:", value);
  });  // Initial  Second then: undefined

  //What will be printed in the following code? Explain the flow.

Promise.resolve()
  .then(() => {
    throw new Error("Oops!");
  })
  .then(() => {
    console.log("This won't run");
  })
  .catch(err => {
    console.log("Caught:", err.message);
  });
  //Caught: Oops!