 const mongoose = require("mongoose");
 const dotenv = require("dotenv")

 // Environment variables setup:
 dotenv.config();
 const {MONGO_URI} = process.env
 if(!MONGO_URI){
    console.error("MONGO_URI env var is not defiend")
 }

 //database connection:  
 const dbConnect = () =>{
    mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Database connection established.")
    })
    .catch((error)=>{
        console.log('Database connection failed', error)
    })
 }

// mongooseClient for MongoStore
 mongooseClient = () => {
    return mongoose.connection.getClient()
 }

 // exports

 module.exports = { dbConnect, mongooseClient }