const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");
const { dbConnect, mongooseClient } = require("./config/database.config.js");
const router = require("./routes/index.router.js");

app = express();
// Environment variables setup:
dotenv.config();
const PORT = process.env.PORT || 3000;
const { SESSION_SECRET } = process.env;
if (!SESSION_SECRET) {
  console.error("SESSION_SECRET env var is not defined.");
  process.exit(1);
}

// Database connection setup:
dbConnect();

//middleware
app.use(router)
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// session middleware
app.use(session({
    secret: SESSION_SECRET,
    resave: false, 
    saveUninitialized: false,
    client: mongooseClient(),

}))


// server start:
app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}...`)
})

