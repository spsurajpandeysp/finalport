const mongoose = require('mongoose');
const URL = "mongodb+srv://surajpandey7493:nSDH2A7UKTY6Ww1q@cluster0.5u3z1jb.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0"
const connectDb = () =>{
    mongoose.connect(URL);
}


module.exports={connectDb};