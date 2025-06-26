// /data/stories.ts

export interface Story {
  title: string;
  tagline: string;
  content: string[];
  slug: string;
  comingSoon?: boolean;
}

export const stories: Story[] = [
  {
    slug: 'the-dream',
    title: 'The Dream',
    tagline: 'Enter a surreal world where reality bends.',
    content: [
      "It began with a whisper, faint and fleeting, in the middle of the night.",
      "The city outside slumbered, unaware of the mind bending inwards...",
      "Each step deeper revealed impossible architecture, folding skies, and memories that didn’t belong to me.",
      // Add more paragraphs
    ],
  },
  {
    slug: 'skybound',
    title: 'Skybound',
    tagline: 'Touch the edge of worlds unknown.',
    content: [],
    comingSoon: true,
  },
  // Add more stories here
];
