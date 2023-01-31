const ProductController = require('../controllers/product.controller')

module.exports = (app) => {

    app.get("/api/test", ProductController.testApi)
    //Create one 
    app.post("/api/product", ProductController.addProduct)
    // //Display all
//     app.get("/api/product", ProductController.allProducts)
//     // //Display one
//     app.get("/api/products/:id", ProductController.oneProduct)
//     // // Update one
//     app.put("/api/products/:id", ProductController.updateProduct)
//     // // Delete one
//     app.delete("/api/products/:id", ProductController.deleteProduct)
} 