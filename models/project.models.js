const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        require:true,
    },
    projectDesc:{
        type:String,
        require:true,
    },
    projectCode:{
        type:String,
        require:true,
    },
    projectAbout:{
        type:String,
        require:true,
    },
    // projectImage:{
    //     type:String,
    //     require:true,
    // }
})

const Project = mongoose.model("Project",projectSchema);

module.exports={Project};