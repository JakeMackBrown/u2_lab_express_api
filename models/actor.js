const { Schema } = require('mongoose');

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        deceased: { type: Boolean, required: true },
        movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]  
    },
    { timestamps: true }
);

module.exports = actorSchema