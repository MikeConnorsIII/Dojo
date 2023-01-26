const Song = require("../models/song.model")
//testApi
module.exports.testApi = (req, res) => {
    res.json({status: 'Im looking good capt!' })
}
// addSong
module.exports.addSong = (req, res) => {
    const newSong = req.body
    // body of data coming in from our request is now newsong
    Song.create(newSong)
    .then(song => res.json(song))
    // response.status(400).json(err)
    .catch(err => res.status(400).json(err))
}
// allSongs
module.exports.allSongs = (req, res) => {
    Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.json(err))
}
//oneSong
module.exports.oneSong = (req, res) => {
    const idFromSpace = req.params.id
    Song.findOne({_id: idFromSpace})
    .then(onesong => res.json(onesong))
    .catch(err => res.json(err))
}
//updateSong
module.exports.updateSong = (req, res) => {
    const idFromSpace = req.params.id
    const newValue = req.body
    Song.findOneAndUpdate({_id: idFromSpace}, newValue, {new: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))
}
//deleteSong
module.exports.deleteSong = (req, res) => {
    Song.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}