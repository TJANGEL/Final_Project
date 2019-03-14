const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  genres: { type: [String] },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;