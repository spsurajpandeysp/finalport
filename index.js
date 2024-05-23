const express = require("express");
require('dotenv').config();
const {getAboutData}= require('./controllers/about.controller');
const {getContactUsData,addContactUsData} = require('./controllers/contactUs.controller');
const {addProject,getAllProject} = require('./controllers/project.controller');
const {getAllCodingHandle} = require('./controllers/codingHandle.controller');
const {getAllSocialHandle} = require('./controllers/socialMediaHandle.controller');
const mongoose = require("mongoose");
const app = express();
var cors = require('cors')

app.use(cors())

const PORT = 4000;
app.use(express.json())
mongoose.connect("mongodb+srv://surajpandey7493:nSDH2A7UKTY6Ww1q@cluster0.5u3z1jb.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0")



app.use(express.static(process.env.PUBLIC_DIR));

// console.log(process.env.PUBLIC_DIR);


app.get('/about',async (req,res)=>{
    await getAboutData(req,res);
})
app.post('/contact-us/',async (req,res)=>{
    await addContactUsData(req,res);
})
app.get('/contact-us/',async (req,res)=>{
    await getContactUsData(req,res);
})
app.post('/projects',async (req,res)=>{
    await addProject(req,res);
})
app.get('/projects',async (req,res)=>{
    await getAllProject(req,res);
})

app.get('/coding-handle',async (req,res)=>{
    await getAllCodingHandle(req,res);
})
app.get('/social-handle',async (req,res)=>{
    await getAllSocialHandle(req,res);
})




app.listen(4000),async ()=>{
    console.log("server Listining On Port: "+PORT)
};