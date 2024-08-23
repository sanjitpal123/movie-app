// src/context/MyContextProvider.jsx
import React, { useState, createContext, useEffect } from "react";
import BannerImg from '../assets/banner.jpg'; // Default banner image

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [Movie, Setmovie] = useState('https://image.tmdb.org/t/p/w500/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg');
  const [movieUrl, setMovieUrl] = useState('movie/now_playing');
  const [Banner, SetBanner]=useState(null)


  const updateBanner = (Movie) => {
    console.log("dfdf",Movie)
    Setmovie(Movie);
  };

  const MovieurlUpdate = (MovieUrl) => {
    setMovieUrl(MovieUrl);
  };

  useEffect(() => {
    console.log("movieUrl updated:", movieUrl);
    setMovieUrl(movieUrl)
  }, [movieUrl]);

  return (
    <MyContext.Provider value={{ Movie,Setmovie, updateBanner, MovieurlUpdate, movieUrl }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
