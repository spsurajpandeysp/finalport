const {CodingHandle} = require('../models/codingHandle.model');


const getAllCodingHandle = async(req,res) => {
    try{
        const codingHandleData =await CodingHandle.find();
        res.status(200).json(codingHandleData);
    }
    catch(err){
        res.status(400).message("get allcoding error");
    }
}

module.exports={getAllCodingHandle};