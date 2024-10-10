const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())

const { Review } = require('./models')
const { Movie } = require('./models')
const { Actor } = require('./models')

app.get('/', (req, res) => {
    res.send('This is root!')
})

app.get('/movies', async (req, res) => {
    const movies = await Movie.find().populate('actors reviews');
    res.json(movies);
  });
  
  // Movies show route
  app.get('/movies/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id).populate('actors reviews');
    res.json(movie);
  });
  
  // Actors index route
  app.get('/actors', async (req, res) => {
    const actors = await Actor.find().populate('movies');
    res.json(actors);
  });
  
  // Actors show route
  app.get('/actors/:id', async (req, res) => {
    const actor = await Actor.findById(req.params.id).populate('movies');
    res.json(actor);
  });
  
  // Reviews index route
  app.get('/reviews', async (req, res) => {
    const reviews = await Review.find().populate('movie');
    res.json(reviews);
  });
  
  // Reviews show route
  app.get('/reviews/:id', async (req, res) => {
    const review = await Review.findById(req.params.id).populate('movie');
    res.json(review);
  });
  
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });