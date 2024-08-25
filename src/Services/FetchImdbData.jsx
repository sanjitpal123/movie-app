import { useCallback, useContext } from 'react';
import axios from 'axios';
import { MyContext } from '../Contextapi/ContextApi';
import { BaseUrl } from '../helper/BaseUrl';
import { apiKey } from '../helper/ApiKey';

const useFetchMovies = () => {
  const { movieUrl } = useContext(MyContext);

  const fetchMovies = useCallback(async () => {
    console.log('Fetching movies with URL:', movieUrl);
    try {
      const response = await axios.get(`${BaseUrl}/${movieUrl}`, {
        params: {
          api_key: apiKey,
        },
       
      });
      console.log("Movies Response:", response);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error.response || error.message);
      throw error;
    }
  }, [movieUrl]);

  return fetchMovies;
};

export default useFetchMovies;
