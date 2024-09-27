const mongoose=require('mongoose');

 const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:'',
    }).then(()=>{
        console.log("Connected to database successfully");
    }).catch((err)=>{
        console.log("Some error occurred while connection to database!!!");
    })
}
module.exports = dbConnection;