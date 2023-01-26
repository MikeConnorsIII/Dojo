const express = require("express");
// import express
const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// body parser

require('./config/mongoose.config')
const Routes = require('./routes/song.routes')
Routes(app)
app.listen(port, () =>{console.log(`Welcome to the Death Star! Port: ${port}`)})