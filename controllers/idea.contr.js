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
exports.updateIdea= (req, res)=>{
//I need to read id passed in path
// 127.0.0.1:8080/ideaApp/v1/ideas/1
const ideaId = req.params.id;
//if the idea is present modify else return error
if(ideas[ideaId]){
  ideas[ideaId] = req.body;
  res.status(200).send(ideas[ideaId]);
}else{
  res.status(400).send({
    message: 'idea Id passed was not correct'
  })
}
}

//delete ideas
exports.deleteIdea = (req, res)=>{
  //check if present - yes delete, no return error

  if(ideas[req.params.id]){
    delete ideas[req.params.id];
    res.status(200).send({
      message: 'Successfully deleted'
    })
  }else{
    res.status(400).send({
      message: 'wrong idea id'
    })
  }
}