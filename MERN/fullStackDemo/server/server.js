const cors = require("cors")

// import our dependancies
const express = require("express")
//initialize 

const app = express()

const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
//url ended allows your to bring in form data

require('./config/mongoose.config')


// require('./routes/song.routes')(app)
//-----------both of these work the same above and below line 16 or 18 and 19
const Routes = require("./routes/song.routes")
Routes(app)

app.listen(port, () => console.log(`Welcome to the Death Star. You're on bridge ${port}`))