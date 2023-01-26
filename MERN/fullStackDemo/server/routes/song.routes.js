const SongController = require('../controllers/song.controller')

module.exports = (app) => {

    app.get("/api/test", SongController.testApi)
    //Create one 
    app.post("/api/songs", SongController.addSong)
    // //Display all
    app.get("/api/songs", SongController.allSongs)
    // //Display one
    app.get("/api/songs/:id", SongController.oneSong)
    // // Update one
    app.put("/api/songs/:id", SongController.updateSong)
    // // Delete one
    app.delete("/api/songs/:id", SongController.deleteSong)
} 