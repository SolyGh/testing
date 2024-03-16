// importing
const say = require("../say");

test("Say Jest Message", () => {
    {/*// here we say what is expected to get */}
    
    
  expect(say()).toBe("Hello Jest");
});


// used in pckg json the test to jest--watchAll 
// to watch files auto and apply the test for every modification