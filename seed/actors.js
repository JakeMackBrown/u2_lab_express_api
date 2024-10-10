const db = require('../db');
const { Actor } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const actors = [
        { name: 'Tim Allen', age: 67, deceased: false },
        { name: 'Sigourney Weaver', age: 72, deceased: false },
        { name: 'Alan Rickman', age: 69, deceased: true },
        { name: 'Tom Hanks', age: 65, deceased: false },
        { name: 'Johnny Depp', age: 58, deceased: false },
        { name: 'Benicio del Toro', age: 54, deceased: false },
        { name: 'Bob Hoskins', age: 71, deceased: true },
        { name: 'Christopher Lloyd', age: 83, deceased: false },
        { name: 'Kathleen Turner', age: 67, deceased: false },
        { name: 'Charles Fleischer', age: 70, deceased: false }
    ];

    const insertedActors = await Actor.insertMany(actors);
    console.log('Actors seeded!');
    return insertedActors; 
};

const run = async () => {
    await main();
    db.close();
};

run();