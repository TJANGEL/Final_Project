const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    image: { type: String, required: true }
});

const Movies = mongoose.model("Movies", movieSchema);

module.exports = Movies;