const express = require("express");
require('dotenv').config()

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("./db/db");



//////
const moviesRoute = require("./routers/Route/moviesRoute");
const sinUpRoute = require("./routers/Route/sinUpRoute");
const logInRoute = require("./routers/Route/logInRoute");
const favortRoute = require("./routers/Route/favortRoute");
app.use(moviesRoute);
app.use(favortRoute);

app.use(sinUpRoute);
app.use(logInRoute);



//////

app.get("/",(req,res)=>{
    res.status(200).json("hello from my app")
})



app.listen(process.env.PORT, ()=>{
    console.log("server is on");
});