// const fs = require("fs");
// fs.writeFile("message.txt", "Hello from Node.js", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });


//read from file
const fs = require('node:fs');

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
