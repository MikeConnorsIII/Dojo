const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [5, "Title must be at least 5 characters long!"],

    },
    artist: {
        type: String, 
        required: [true, "Title is required"],
        minLength: [5, "Title must be at least 5 characters long!"],
    },
    rating: {
        type: Number, 
        min: [1, "Rating must be positive!"],
        max: [10, "Max rating is 10!"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Song', SongSchema)