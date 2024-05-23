const mongoose = require('mongoose');

const SocialHandleSchema = new mongoose.Schema({
    name:{
        require:true,
        type:String,
    },
    image:{
        require:true,
        type:String
    },
    link:{
        require:true,
        type:String
    }
})


const SocialHandle = mongoose.model("SocialMedia",SocialHandleSchema);

module.exports={SocialHandle};