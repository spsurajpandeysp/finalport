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
// const {connectDb} = require('./dbConnection');
const PORT = 4000;
app.use(express.json())
mongoose.connect(process.env.DATABASE_URL)



app.use(express.static(process.env.PUBLIC_DIR));

console.log(process.env.PUBLIC_DIR);

// app.get('/',(req,res)=>{
//     console.log(process.env.DATABASE_URL);
//     console.log(process.env.PUBLIC_DIR);
//     res.send("suraj pandeydfs fddfs");
// })

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




app.listen(process.env.PORT),async ()=>{
    console.log("server Listining On Port: "+process.env.PORT)
};