const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phoneNumber:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    }
})

const ContactUs = mongoose.model("ContactUs",contactUsSchema);

module.exports={ContactUs};