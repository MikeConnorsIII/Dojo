const mongoose = require("mongoose")

const database = "productmanagerdb"

mongoose.set('strictQuery', false)
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Loading products from db -  ${database}`))
.catch((error) => console.log("Karen's in the house!", error))