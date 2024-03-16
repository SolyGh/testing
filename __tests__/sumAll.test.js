const sumAll = require("../sumAll");

test("return sum of all nums", () => {
  expect(sumAll(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
});

// and here it is refactored and done well

// but like that the first test of the null input will fail
//* test("return sum of all nums", () => {
//*     expect(sumAll()).toBe(zero);
//*   });

// *so we go add the feature initial value of the reduce method that will make the null return zero



// for the knowledge this is called test block
test("return sum of all nums", () => {
  expect(sumAll()).toBe(0);
});
 