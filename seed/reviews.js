const db = require('../db');
const { Review, Movie } = require('../models'); 

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const galaxyQuest = await Movie.findOne({ title: 'Galaxy Quest' });
  const harryPotter = await Movie.findOne({ title: 'Harry Potter and the Prisoner of Azkaban' });
  const fearAndLoathing = await Movie.findOne({ title: 'Fear and Loathing in Las Vegas' });
  const rogerRabbit = await Movie.findOne({ title: 'Who Framed Roger Rabbit?' });

  const reviews = [
    { movie: galaxyQuest._id, score: 85, comment: 'An unexpectedly funny and heartwarming movie!' },
    { movie: galaxyQuest._id, score: 90, comment: 'A sci-fi comedy classic!' },                  
    { movie: harryPotter._id, score: 95, comment: 'A magical, enchanting movie!' },            
    { movie: harryPotter._id, score: 98, comment: 'Brilliant, the best of the series!' },       
    { movie: fearAndLoathing._id, score: 75, comment: 'A wild, weird ride!' },              
    { movie: rogerRabbit._id, score: 80, comment: 'A visual and narrative masterpiece!' }             
  ];

  await Review.insertMany(reviews);
  console.log('Reviews seeded!');
};

const run = async () => {
  await main();
  db.close();
};

run();
