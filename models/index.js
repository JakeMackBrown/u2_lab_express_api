const mongoose = require('mongoose')
const movieSchema = require('./movie')
const reviewSchema = require('./review')
const actorSchema = require('./actor')

const Movie = mongoose.model('Movie', movieSchema)
const Review = mongoose.model('Review', reviewSchema)
const Actor = mongoose.model('Actor', actorSchema)

module.exports = {
  Movie,
  Review,
  Actor
}