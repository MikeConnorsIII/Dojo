const mongoose = require("mongoose")

//create database table (called collections in MongoDB)
const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [5, "Title must be 5 characters long"]
    },
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minlength: [5, "Title must be 5 characters long"]
    },
    rating: {
        type: Number, 
        min: [1, "Rating must be greater than 0."],
        max: [10, "No more than 10"],
        required: [true, "Must provide rating!"]
    },
    top100: {
        type: Boolean, 
        required: [false]
    }
}, {timestamps: true})

module.exports = mongoose.model('Song', SongSchema)