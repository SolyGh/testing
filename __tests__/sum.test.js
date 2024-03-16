// importing the sum

const theSum = require("../sum");

// test() method that will apply three params name, func, timeout
// test(name,fn,timeout)
// we also can use it() instead of test() and it sounds logical
// like it does something .. expected something..
//name is the name or description of the test or what it does

test("Return the number", () => {
  // then the function of what it is expected to do
  expect(theSum(10)).toBe(10);
});

test("Return the number1+number2", () => {
  // this should fail
  expect(theSum(10, 20)).toBe(30);
});

// so we went to the sum.js made a refactor and make the sum to be num1+num2 instead of one num
// and this makes the first test here (10) to fail because it has one num
//* const theSum = (num1,num2) => {
//*     return num1 + num2;
//*   };

// so we go back to sum.js to refactor using a pattern called truthy falsy pattern
//* const theSum = (num1, num2) => {
// *  return num1 + (num2 || null);
//* }; and like that both tests of the sum here is perfect

// and this for the test of three nums we made it like this
//* const theSum = (num1, num2, num3) => {
// *    return num1 + (num2 || null) + (num3 || null);
//*   };
test("return the sum of three", () => {
  expect(theSum(10, 20, 40)).toBe(70);
});

// but what if null or zero
test("return zero if no num", () => expect(theSum()).toBe(0));
//so we made the fun like this
//*const theSum = (num1, num2, num3) => {
//*return (num1 || 0) + (num2 || null) + (num3 || null);
//* } and it worked;

//but what if user used more nums than i made !
// test("sum of all nums", () => {
//   expect(theSum(1, 9 ,10 ,40 ,20 ,10 ,100 ,10)).toBe(200);
// });

// it will fail so i will
// try figuring this out in another test i will call it sumAll
