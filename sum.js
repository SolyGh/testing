// arrow func applies only one number we called it num
const theSum = (num1, num2, num3, num4) => {
  return (num1 || 0) + (num2 || null) + (num3 || null) + (num4 || null);
};

// exporting
module.exports = theSum;
// now i will go create in the __tests__ folder another file called sum.test.js
