function sayHello() {
  return `Hello Jest`;
}




// to test this module i have to export it then import in test file
// exporting
module.exports=sayHello;
// then i created the file say.test.js 