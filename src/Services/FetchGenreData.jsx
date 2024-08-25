import { useCallback, useContext } from 'react';
import axios from 'axios';
import { MyContext } from '../Contextapi/ContextApi';
import { BaseUrl } from '../helper/BaseUrl';
import { apiKey } from '../helper/ApiKey';

const useFetchGenre = () => {
  const { Genre ,SetGenre} = useContext(MyContext);
  console.log("genre",Genre)

  const fetchGenreMovie = useCallback(async () => {
    console.log(`Fetching movies with Genre ID: ${Genre}`);
    try {
      const response = await axios.get(`${BaseUrl}/discover/movie`, {
        params: {
          api_key: apiKey,
          with_genres: Genre,
        },
      
      });
      console.log("Genre Movies Response:", response);
      return response.data;
      
      
    } catch (error) {
      console.error("Error fetching genre movies:", error.response || error.message);
      throw error;
    }
  }, [Genre]);

  return fetchGenreMovie;
};

export default useFetchGenre;
