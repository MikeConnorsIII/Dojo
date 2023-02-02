const cors = require("cors")

const express = require("express")

const app = express()
const port = 8000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./config/mongoose.config')

const Routes = require("./routes/omniPan.routes")
Routes(app)

app.listen(port, ()=>console.log(`Welcome to the kitchen, on ${port}  `))