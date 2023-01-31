const Product = require("../models/product.model")
//testApi
module.exports.testApi = (req, res) => {
    res.json({status: 'Finding items!' })
}
// addProduct
module.exports.addProduct = (req, res) => {
    const newProduct = req.body
    // body of data coming in from our request is now newproduct
    Product.create(newProduct)
    .then(product => res.json(product))
    // response.status(400).json(err)
    .catch(err => res.status(400).json(err))
}
// allProduct
module.exports.allProducts = (req, res) => {
    Product.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))
}
//oneProduct
module.exports.oneProduct = (req, res) => {
    const idFromSpace = req.params.id
    Product.findOne({_id: idFromSpace})
    .then(oneproduct => res.json(oneproduct))
    .catch(err => res.json(err))
}
//updateProduct
module.exports.updateProduct = (req, res) => {
    const idFromSpace = req.params.id
    const newValue = req.body
    Product.findOneAndUpdate({_id: idFromSpace}, newValue, {new: true, runValidators: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))
}
//deleteProduct
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}