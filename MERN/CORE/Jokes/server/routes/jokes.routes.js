const JokesController = require('../controllers/jokes.controller')

module.exports = (app) => {

    app.get("/api/test", JokesController.testApi)
    //Create one 
    app.post("/api/jokes", JokesController.addJoke)
    // //Display all
    app.get("/api/jokes", JokesController.allJokes)
    // //Display one
    app.get("/api/joke/:id", JokesController.oneJoke)
    // // Update one
    app.put("/api/joke/:id", JokesController.updateJoke)
    // // Delete one
    app.delete("/api/joke/:id", JokesController.deleteJoke)
} 