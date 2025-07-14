const express = require('express');
const router = express.Router();
const Story = require('../models/Story');

// Get all stories (for homepage)
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find().sort({order:1});
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stories' });
  }
});

// Get a single story by slug (for StoryPage)
router.get('/:slug', async (req, res) => {
  try {
    const story = await Story.findOne({ slug: req.params.slug });
    if (!story) return res.status(404).json({ error: 'Story not found' });
    res.json(story);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch story' });
  }
});

// Get a chapter by story slug and chapter number (for ChapterPage)
router.get('/:slug/chapter/:number', async (req, res) => {
  try {
    const story = await Story.findOne({ slug: req.params.slug });
    if (!story) return res.status(404).json({ error: 'Story not found' });

    const chapter = story.chapters.find(
      (ch) => ch.number === parseInt(req.params.number)
    );

    if (!chapter) return res.status(404).json({ error: 'Chapter not found' });
    
    res.json({ storyTitle: story.title,storyOrder:story.order, ...chapter.toObject() });
  } catch (err) {
    console.error('Error fetching chapter:', err); 
    res.status(500).json({ error: 'Failed to fetch chapter' });
  }
});

module.exports = router;
