const mongoose = require("mongoose")

//create database table (called collections in MongoDB)
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, " is required"],
        minlength: [10, "Setup must be 10 characters long"]
    },
    punchLine: {
        type: String,
        required: [true, " is required"],
        minlength: [3, "Punchline must be 3 characters long"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Joke', JokeSchema)