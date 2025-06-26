require('dotenv').config();
const mongoose = require('mongoose');
const Story = require('../models/Story');
const Chapter = require('../models/Chapter');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear previous data
    await Story.deleteMany();
    await Chapter.deleteMany();

    const story = await Story.create({
      title: 'The Dream',
      slug: 'the-dream',
      tagline: 'Enter a surreal world where reality bends.',
      image: '/images/book-thumbnails/the-dream.png',
    });

    const chapters = [
      {
        storySlug: 'the-dream',
        number: 1,
        title: 'The Awakening',
        image: '/images/chapters/chapter1.jpg',
        content: 'You wake up in a foggy dreamscape...',
      },
      {
        storySlug: 'the-dream',
        number: 2,
        title: 'Into the Fog',
        image: '/images/chapters/chapter2.jpg',
        content: 'The mist thickens, and something whispers...',
      },
      {
        storySlug: 'the-dream',
        number: 3,
        title: 'The Unseen Door',
        image: '/images/chapters/chapter3.jpg',
        content: 'You find a door without a handle...',
      },
    ];

    await Chapter.insertMany(chapters);

    console.log('🌱 Seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  }
};

seedData();
