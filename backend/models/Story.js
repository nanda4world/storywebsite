const mongoose = require('mongoose');
const ChapterSchema = require('./Chapter');

const StorySchema = new mongoose.Schema({
  title: String,
  tagline: String,
  image: String,
  slug: String,
  genre: String,
  order:Number,
  comingSoon: Boolean,
  
  chapters: [ChapterSchema],
});

module.exports = mongoose.model('Story', StorySchema);
