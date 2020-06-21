const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')

const Favourite = new Schema({
    username: String,
    imdbID: String
})

// create new Favourite document
Favourite.statics.add = function(username, imdbID) {

    const favourite = new this({
        imdbID,
        username
    })

    // return the Promise
    return favourite.save()
}

// find favourite movies by using username
Favourite.statics.findByUsername = function(username) {
    return this.find({
        username
    }).exec()
}

module.exports = mongoose.model('Favourite', Favourite)