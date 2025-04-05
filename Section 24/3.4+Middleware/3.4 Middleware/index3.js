import express, { response } from "express";

const app = express();
const port = 3000;

function logger(req,res, next){
  //the first console log grabs the method used in the request
    console.log("Response: ", req.method);
    //the second line will grab the url the request is coming from 
    console.log("URL: ",  req.url);
    //you need this next method bc otherwise itll hang, it never reaches the next line
    next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
