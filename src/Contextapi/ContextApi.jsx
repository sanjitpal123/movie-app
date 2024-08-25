// src/context/MyContextProvider.jsx
import React, { useState, createContext, useEffect } from "react";
import BannerImg from '../assets/banner.jpg'; // Default banner image

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const initial=
    {
      adult: false,
  backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
  genre_ids: (3) [28, 35, 878],
  id: 533535,
  original_language: "en",
  original_title: "Deadpool & Wolverine",
  overview: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
  popularity: 5845.013,
  poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  release_date: "2024-07-24",
  title: "Deadpool & Wolverine",
  video: false,
  vote_average: 7.752,
  vote_count: 2211
    }
  
  
  const [Movie, Setmovie] = useState(initial);
  const [movieUrl, setMovieUrl] = useState('movie/now_playing');
  const [Banner, SetBanner]=useState(null)
  const [Genre, SetGenre]=useState(null)
  const [MovieId, SetMovieId]=useState(null)


  const updateBanner = (Movie) => {
    console.log("dfdf",Movie)
    Setmovie(Movie);
  };

  useEffect(()=>{
    console.log('Genre',Genre)
  },[Genre])
function GenreSet(id)
{
  SetGenre(id)
}
  const MovieurlUpdate = (MovieUrl) => {
    setMovieUrl(MovieUrl);
  };

  useEffect(() => {
    console.log("movieUrl updated:", movieUrl);
    setMovieUrl(movieUrl)
  }, [movieUrl]);


  return (
    <MyContext.Provider value={{ SetMovieId,MovieId,Movie,Setmovie, GenreSet,updateBanner, MovieurlUpdate, movieUrl ,SetGenre,Genre}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
