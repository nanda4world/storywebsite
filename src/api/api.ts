import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Update this if your backend is hosted
});

export const fetchStories = () => API.get('/stories');

export const fetchStoryBySlug = (slug: string) => API.get(`/stories/${slug}`);

export const fetchChapter = (slug: string, number: number) =>
  API.get(`/stories/${slug}/chapter/${number}`);
