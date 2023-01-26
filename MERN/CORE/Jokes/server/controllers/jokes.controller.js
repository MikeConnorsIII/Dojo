const Joke = require("../models/jokes.model")
//testApi
module.exports.testApi = (req, res) => {
    res.json({status: 'Come at me funnyboi' })
}
// addJoke
module.exports.addJoke = (req, res) => {
    const newJoke = req.body
    // body of data coming in from our request is now newJoke
    Joke.create(newJoke)
    .then(joke => res.json(joke))
    // response.status(400).json(err)
    .catch(err => res.status(400).json(err))
}
// allJokes
module.exports.allJokes = (req, res) => {
    Joke.find()
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}
//oneJoke
module.exports.oneJoke = (req, res) => {
    const idFromSpace = req.params.id
    Joke.findOne({_id: idFromSpace})
    .then(onejoke => res.json(onejoke))
    .catch(err => res.json(err))
}
//updateJoke
module.exports.updateJoke = (req, res) => {
    const idFromSpace = req.params.id
    const newValue = req.body
    Joke.findOneAndUpdate({_id: idFromSpace}, newValue, {new: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))
}
//deleteJoke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}