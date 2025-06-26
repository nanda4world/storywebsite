const express = require('express');
const router = express.Router();
const Chapter = require('../models/Chapter');

// Get all chapters for a story
router.get('/:slug', async (req, res) => {
  try {
    const chapters = await Chapter.find({ storySlug: req.params.slug }).sort({ number: 1 });
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chapters' });
  }
});

// Get a specific chapter
router.get('/:slug/:number', async (req, res) => {
  try {
    const chapter = await Chapter.findOne({
      storySlug: req.params.slug,
      number: req.params.number,
    });

    if (!chapter) return res.status(404).json({ error: 'Chapter not found' });
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chapter' });
  }
});

module.exports = router;
