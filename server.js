const express = require ("express");

const app= express();

app.use(express.json());

app.use(myMiddleware);

function myMiddleware (req, res, next){
    console.log("inside the middleware I created");
    next();//it wll pass ctrl to the next step
}


//stick the routes to the server

require("./routes/idea.routes")(app);

app.listen(8080, ()=>{
    console.log("Server started");
})

