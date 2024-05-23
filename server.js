const app = require(".");

// const {connectDb} = require("./dbConnection");

const PORT = 4000;
app.listen(4000),async ()=>{
    // await connectDb();
    console.log("server Listining On Port: "+PORT)
};