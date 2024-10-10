const { Schema } = require('mongoose');

const reviewSchema = new Schema(
    {
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
        score: { type: Number, required: true, min: 0, max: 100 },
        comment: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = reviewSchema