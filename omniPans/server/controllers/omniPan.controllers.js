const Chef = require("../models/omniPan.models")
//testApi
module.exports.testApi = (req, res) => {
    res.json({status: 'Finding Chefs!' })
}
// addChef
module.exports.addChef = (req, res) => {
    const newChef = req.body
    // body of data coming in from our request is now newChef
    Chef.create(newChef)
    .then(Chef => res.json(Chef))
    // response.status(400).json(err)
    .catch(err => res.status(400).json(err))
}
// allChef
module.exports.allChefs = (req, res) => {
    Chef.find()
    .then(Chef => res.json(Chef))
    .catch(err => res.json(err))
}
//oneChef
module.exports.oneChef = (req, res) => {
    const idFromSpace = req.params.id
    Chef.findOne({_id: idFromSpace})
    .then(oneChef => res.json(oneChef))
    .catch(err => res.json(err))
}
//updateChef
module.exports.updateChef = (req, res) => {
    const idFromSpace = req.params.id
    const newValue = req.body
    Chef.findOneAndUpdate({_id: idFromSpace}, newValue, {new: true, runValidators: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))

    // err => res.status(400).json(err) maybe for later
}
//deleteChef
module.exports.deleteChef = (req, res) => {
    Chef.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}