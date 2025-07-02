const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  number: Number,
  title: String,
  image: String,
  content: String,
});

module.exports = ChapterSchema;
