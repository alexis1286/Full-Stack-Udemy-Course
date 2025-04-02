import express from "express";
const app = express();
const port  = 3000;

app.get("/", (req,res) => {
   res.send("<h1>Hello World</h1>");
});

app.get("/about", (req,res) => {

    res.write("<h1>About Me</h1>");
    res.write("<p>I am a recent CS grad learning about full stack web dev</p>");
    //couldve written it as res.send("<h1>about Me</h1><p>my name is alexis</p>"); also
 });

 app.get("/contact", (req,res) => {
    res.write("<h1>Contact</h1>");
    res.write("<p>You can't contact me. Don't try to. hehe</p>");
 });
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});