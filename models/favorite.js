const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;