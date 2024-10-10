const db = require('../db');
const { Movie, Actor } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const actors = await Actor.find(); 
    const movies = [
        {
            title: "Galaxy Quest",
            runtime: 102,
            rating: 90,
            year_released: 1999,
            description: "The stars of a 1970s sci-fi show -- now scraping a living through re-runs and sci-fi conventions are beamed aboard an alien spacecraft. Believing the cast's heroic on-screen dramas are historical documents of real-life adventures, the band of aliens turn to the ailing celebrities for help in their quest to overcome the oppressive regime in their solar system.",
            actors: [actors[0]._id, actors[1]._id, actors[2]._id],
            reviews: [] // Temporarily empty; link reviews after seeding (actors->movies->reviews)
        },
        {
            title: "Harry Potter and the Prisoner of Azkaban",
            runtime: 142,
            rating: 90,
            year_released: 2004,
            description: "Harry Potter's (Daniel Radcliffe) third year at Hogwarts starts off badly when he learns deranged killer Sirius Black (Gary Oldman) has escaped from Azkaban prison and is bent on murdering the teenage wizard. While Hermione's (Emma Watson) cat torments Ron's (Rupert Grint) sickly rat, causing a rift among the trio, a swarm of nasty Dementors is sent to protect the school from Black. A mysterious new teacher helps Harry learn to defend himself, but what is his secret tie to Sirius Black?",
            actors: [actors[3]._id], 
            reviews: [] 
        },
        {
            title: "Toy Story",
            runtime: 82,
            rating: 100,
            year_released: 1995,
            description: "Woody (Tom Hanks), a good-hearted cowboy doll who belongs to a young boy named Andy (John Morris), sees his position as Andy's favorite toy jeopardized when his parents buy him a Buzz Lightyear (Tim Allen) action figure. Even worse, the arrogant Buzz thinks he's a real spaceman on a mission to return to his home planet. When Andy's family moves to a new house, Woody and Buzz must escape the clutches of maladjusted neighbor Sid Phillips (Erik von Detten) and reunite with their boy.",
            actors: [actors[0]._id, actors[4]._id],
            reviews: [] 
        },
        {
            title: "Fear and Loathing in Las Vegas",
            runtime: 118,
            rating: 51,
            year_released: 1998,
            description: "Raoul Duke (Johnny Depp) and his attorney Dr. Gonzo (Benicio del Toro) drive a red convertible across the Mojave desert to Las Vegas with a suitcase full of drugs to cover a motorcycle race. As their consumption of drugs increases at an alarming rate, the stoned duo trash their hotel room and fear legal repercussions. Duke begins to drive back to L.A., but after an odd run-in with a cop (Gary Busey), he returns to Sin City and continues his wild drug binge.",
            actors: [actors[5]._id], 
            reviews: [] 
        },
        {
            title: "Who Framed Roger Rabbit?",
            runtime: 103,
            rating: 96,
            year_released: 1988,
            description: "Down-on-his-luck private eye Eddie Valiant (Bob Hoskins) gets hired by cartoon producer R.K. Maroon (Alan Tilvern) to investigate an adultery scandal involving Jessica Rabbit (Kathleen Turner), the sultry wife of Maroon's biggest star, Roger Rabbit (Charles Fleischer). But when Marvin Acme (Stubby Kaye), Jessica's alleged paramour and the owner of Toontown, is found murdered, the villainous Judge Doom (Christopher Lloyd) vows to catch and destroy Roger.",
            actors: [actors[6]._id, actors[7]._id, actors[8]._id, actors[9]._id], 
            reviews: [] 
        }
    ];

    await Movie.insertMany(movies);
    console.log('Movies seeded!');
};

const run = async () => {
    await main();
    db.close();
};

run();

