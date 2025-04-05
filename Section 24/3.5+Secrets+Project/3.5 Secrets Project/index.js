//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
//bodyparser is apart of express now, so u dont really need it
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var pass = "";

app.use(bodyParser.urlencoded({ extended:true }));

function passwordChecker(req,res,next){
    pass = req.body["password"];
    next();
    //probs wouldve been better to set a boolean and then determine if the pass is correct
    //so if (req.body["password"] == "ILoveProgramming"){
    //Authorized == true; , else false and then down in the post change the if
    //to just if its true then let them thru
    //}
}

app.use(passwordChecker);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) =>{
    if(pass == "ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
        //res.redirect("/"); also works so u dont need to worry abt the path
    }
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});