const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    image:{
        required:true,
        type:String
    }
});

const About = mongoose.model("About", aboutSchema);

module.exports = {About};
