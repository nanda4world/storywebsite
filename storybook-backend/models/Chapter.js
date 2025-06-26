const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  storySlug: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  title: String,
  image: String,
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Chapter', ChapterSchema);
