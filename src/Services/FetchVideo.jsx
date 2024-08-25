import axios from 'axios';

const fetchMovieVideos = async (movieId) => {
  const apiKey = '9f5d457a66710121a71fd84480218793';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
  
  try {
    const response = await axios.get(url, {
      params: {
        api_key: apiKey,
        language: 'en-US'
      }
    });
    console.log("Movie videos:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie videos:", error);
    throw error;
  }
};

export default fetchMovieVideos;
