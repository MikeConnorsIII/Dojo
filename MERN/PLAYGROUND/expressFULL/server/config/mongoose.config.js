const mongoose = require("mongoose")

const database = "songdb23"

mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log(`Established a DB connection to the rebel base: ${database}`))
.catch(() => console.log("Abort something is wrong...ABORT!!!", err))