
const aboutModel = require('../models/about.model');
const About = aboutModel.About;

const getAboutData = async (req, res) => {
    try {
        const aboutData = await About.find();
        res.status(200).json(aboutData);
    } catch (err) {
        res.status(400).json({ message: "Error in getting about data", error: err });
    }
}

module.exports = { getAboutData };
