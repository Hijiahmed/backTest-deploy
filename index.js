const express = require("express");
require('dotenv').config()

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json("hello from my app")
})



console.log(process.env.PORT)
app.listen(process.env.PORT, ()=>{
    console.log("server is on");
});