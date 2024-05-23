const {Project} = require('../models/project.models');


const addProject = async(req,res)=>{
    try{
        const projectData = await new Projects(req.body);
        projectData.save();
        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).send("error in add project");
    }
}

const getAllProject = async(req,res)=>{
    try{
        const projectsData = await Project.find();
        res.status(200).json(projectsData);
    }
    catch(err){
        res.status(200).send("error in get all projects");
    }

}

module.exports={addProject,getAllProject};