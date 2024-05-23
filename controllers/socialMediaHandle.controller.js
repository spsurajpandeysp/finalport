const {SocialHandle} = require('../models/socialHandle.model')

const getAllSocialHandle =async (req,res) => {
    try{
        const socialHandleData  =await SocialHandle.find();
        res.status(200).json(socialHandleData);
    }
    catch(err){
        res.status(400).message("error in socialhandle");
    }
    
}


module.exports={getAllSocialHandle};