// holds all logic for each model
const Song = require("../models/song.model")

module.exports.testApi = (req, res) => {
    res.json({Status: 'I made it captain!'})
}

//create
module.exports.createSong = (req, res) => {
    const newSong = req.body
    Song.create(newSong)
    .then(potato => res.json)(potato)
    .catch(err => res.json(err))
    // refers to database 

}

//Read all
module.exports.getAllSongs = (req, res) => {
    Song.find()
    .then((songs) => res.json(songs))
    .catch((err) => res.json(err))
}
//Read one 
module.exports.oneSong = (req, res) => {
    const idFromParams = req.params.id
    Song.findOne({_id: idFromParams})
    .then(() => res.json(one))
    .catch(err => res.json(err))
}

//Update one
module.exports.updateSong = (req, res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    Song.findOneAndUpdate({_id: idFromParams}, updateValue, {new: true})
    // findoneandupdate is the criteria 
    .then((updatedSong) => res.json(updatedSong))
    .catch(err => res.json(err))
}
//Delete
module.exports.deleteSong = (req, res) => {
    Song.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}