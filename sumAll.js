//  so as i said i will create this file for the unkown number of numbers
// i will use the "rest parameter" which is "..." and i will call it numbers or anything"
// the i will use the reduce method which does iteration on my array
// بتاخد ال element value اللي انا فيه وتضيفه to the previous el value
const sumAll = (...numbers) => {
  return numbers.reduce(
    (prv, crv) => prv + crv,
    // for the null
    0
  );
};
module.exports = sumAll;
