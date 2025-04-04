import express from "express";
import bodyParser from "body-parser";

//these are the lines of code needed to find the exact location of the index.html in the project
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//use gets called before route handlers, bodyparser is hte middleware
//urlencoded deals with html form - extended detemines whats using behind the scenes when data comes in
//this gives every request a req.body, which before this, it wouldnt have a req.body
app.use(bodyParser.urlencoded({ extended:true }));


//can use postman now to test a input, and we will see the data in the console.log
app.post("/submit", (req,res) => {
  console.log(req.body);
})


app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});
//sendfile requires an exact file 

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
