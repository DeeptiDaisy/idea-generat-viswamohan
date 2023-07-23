
const ideaContr = require("../controllers/idea.contr");
//define rutes for call like
// GET 127.0.0.1:8080/ideaApp/v1/ideas

module.exports=(app)=>{
    //1restfull api
    app.get("/ideaApp/v1/ideas",ideaContr.fetchAllIdeas);
// post call
    app.post("/ideaApp/v1/ideas", ideaContr.createIdea);

    //put call
    app.put("ideaApp/v1/ideas/:id", ideaContr.updateIdea);

    //delete call
    app.delete("ideaApp/v1/ideas/:id", ideaContr.deleteIdea);
}
