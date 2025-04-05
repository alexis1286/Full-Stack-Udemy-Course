import express from "express";
import bodyParser from "body-parser";
//lines of code to get the location of index.html project
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var name = "";

//middleware to parse thru the input so we can then display it
app.use(bodyParser.urlencoded({ extended: true }));

//have to make a function to get the body input and concant it to a var
//making ur own middleware basically
function bandname(req, res, next) {
	name = req.body["street"] + req.body["pet"];
	next();
}

//have to run the function
app.use(bandname);

//displays the index.html onto our site
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
	//output the name that we inputted into our generator using our function and the name var it created
	//couldve also just written this here:

	//name = req.body["street"] + req.body["pet"];

	//and not had the function at all, it wouldve worked also
	res.send(`<h1>Your Bandname is:<br>${name}🎸🤘🔥<h1>`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
