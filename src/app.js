let express=require("express");
require("dotenv").config();
let db=require("../db.js");
const bodyParser = require("body-parser");
let app=express();
let router=require("./routes/routes.js"); //routes folder-->routes file import keli

app.use(express.static("public")); //built in middleware

app.use(bodyParser.urlencoded({extended:true}));

//app.set("view engine","ejs");
app.use(express.json());
app.use("/",router);  //middleware
module.exports=app;