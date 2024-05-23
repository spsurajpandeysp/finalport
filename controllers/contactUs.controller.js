const {ContactUs} = require("../models/contactUs.model");

const addContactUsData = async (req,res) =>{
    try{
        const contactUsData = new ContactUs(req.body);
        contactUsData.save();
        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).send("errororro in add constacDAta");
    }
}

const getContactUsData = async (req,res) => {
    try{
        const contactUsData = await ContactUs.find();
        res.status(200).json(contactUsData);
    }
    catch(err){
        res.status(400).send("error in getContactus data");
    }
}


module.exports={getContactUsData,addContactUsData};