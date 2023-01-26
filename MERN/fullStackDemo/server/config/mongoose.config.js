const mongoose = require("mongoose")

const database = "fullstackdemo23"

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Hacking Rebel data commlink on ${database}`))
.catch((error) => console.log("Something is wrong capt!", error))