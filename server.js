const express = require ("express");

const serverConfig = require("./configs/server.config");
const mongoose = require("mongoose");
const dbConfig= require("./configs/db.config");

const app= express();


/**
 * logic to connect to mongodb and create an admin user
 * need to have mongodb up and running in your local machine
 */
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error", ()=>{
    console.log("Error while connecting to db");
});

db.once("open", ()=>{
    console.log("DB is connected");
});

app.use(express.json());

app.use(myMiddleware);

function myMiddleware (req, res, next){
    console.log("inside the middleware I created");
    next();//it wll pass ctrl to the next step
}


//stick the routes to the server

require("./routes/idea.routes")(app);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started at ${serverConfig.PORT} `);
})

