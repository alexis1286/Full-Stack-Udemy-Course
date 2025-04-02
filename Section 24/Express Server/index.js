import express from "express";
const app = express(); 
const port = 3000; 
//the 3000 is the port, which is where our server is listening


app.listen(port, () => {
    console.log(`server running on port ${port}.`); //this is the callback that will be triggerered when our server
    //is setup
});

//run the server by typgin node index.js