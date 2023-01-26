const mongoose = require("mongoose")

const database = "jokesAPIdb"

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Clowning on these fools ${database}`))
.catch((error) => console.log("You're not funny anymore!", error))