const mongoose= require('mongoose');


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    userId :{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        minLength: 10,
        lowercase: true
    },
    userType: {
        type: String,
        require: true,
        deafault: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"]
    }


},{timestamps: true});
/**
 * define collections where it will store
 */

module.exports= mongoose.model("User", userSchema);