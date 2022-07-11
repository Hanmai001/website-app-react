const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Film = new Schema({
    name: {type: String, maxLength: 255},
    image: {type: String, maxLength: 255},
    director: {type: String, maxLength: 255},
    country: {type: String, maxLength: 255},
    year: {type: String, maxLength: 255},
    type: {type: String, maxLength: 255},
    actor: {type: String, maxLength: 255},
    description: {type: String, maxLength: 255},
})

module.exports = mongoose.model('film', Film)
