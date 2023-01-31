const mongoose = require("mongoose")

//create database table (called collections in MongoDB)
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [5, "Title must be 5 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Title must be 5 characters long"]
    },
    price: {
        type: Number, 
        min: [1, "Price must be greater than 0."],
        max: [100, "No more than 10"],
        required: [true, "Must provide rating!"]
    },
    
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema)