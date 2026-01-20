import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY || 'GlVGYHkr3WSBnllca';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const fetchGoodJobGif = async () => {
  try {
    const url = `${BASE_URL}/random?api_key=${API_KEY}&tag=good job&rating=g`;
    const { data } = await axios.get(url);
    return data.data.images.downsized_large.url;
  } catch (error) {
    console.error('Error fetching GIF:', error);
    return null;
  }
};
