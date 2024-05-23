const mongoose = require('mongoose');

const CodingHandleSchema = new mongoose.Schema({
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


const CodingHandle = mongoose.model("CodingMedia",CodingHandleSchema);

module.exports={CodingHandle};