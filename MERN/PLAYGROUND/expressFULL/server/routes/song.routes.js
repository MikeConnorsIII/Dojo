// we want routes to know where our controller is 
const SongController = require("../controllers/song.controller")

module.exports = (app) => {
    app.get("/api/test", SongController.testApi)
    // every route should have an /api
    app.get("/api/songs", SongController.getAllSongs)
    app.post("api/songs", SongController.createSong)
    app.get("/api/songs/:id", SongController.oneSong)
    app.put("/api/song/:id", SongController.updateSong)
    app.delete("/api/song/:id", SongController.deleteSong)
}