const ideas = require("../models/idea.model");

//search all ideas

exports.fetchAllIdeas = (req , res)=>{
    res.status(200).send(ideas);
}

let idCount = 1;

//create new ideas

exports.createIdea = (req, res)=>{
    //read req body
  const idea = req.body;
    //need to genrate next idea id
   idea.id= ++idCount;
    // save it in th list of existing idea
   ideas[idCount]= idea ;
    //return res
res.status(201).send(ideas[idCount]);
}


//update ideas


//delete ideas