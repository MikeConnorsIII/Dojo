const omniPanController = require('../controllers/omniPan.controllers')

module.exports = (app) => {

    app.get("/api/test", omniPanController.testApi)
    //Create one 
    app.post("/api/omniPan", omniPanController.addChef)
    //Display all
    app.get("/api/omniPan", omniPanController.allChefs)
    // //Display one
    app.get("/api/omniPans/:id", omniPanController.oneChef)
    // // Update one
    app.put("/api/omniPans/:id", omniPanController.updateChef)
    // // Delete one
    app.delete("/api/omniPans/:id", omniPanController.deleteChef)
} 