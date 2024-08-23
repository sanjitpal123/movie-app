// src/components/Movie.jsx
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useFetchMovies from "../Services/FetchImdbData";
import { MyContext } from "../Contextapi/ContextApi"; 
import { IMAGE_BASE_URL } from "../helper/MovieBaseUrl";
import Banner from "../Banner/Banner";

const Movie = () => {
  const { movieUrl, updateBanner} = useContext(MyContext);
  const fetchMovies = useFetchMovies();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies", movieUrl],
    queryFn: fetchMovies,
  });

  function BannerImageUpdate(movie) {
    console.log("fffff",movie)
    updateBanner(movie);
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-[100px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center mt-[100px] text-red-500">
        Error: {error?.message || "An error occurred"}
      </div>
    );
  }
 

  return (
    <div className="w-full">
      <Banner />
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] min-h-[20vh] flex flex-wrap my-2 gap-2">
          {data?.results?.map((movie) => (
            <div
              className="w-[30%] sm:w-[19%] h-[70px] sm:h-[100px] hover:w-[21%] cursor-pointer transition-all duration-300"
              onClick={() => BannerImageUpdate(movie)}
              key={movie.id}
            >
              <img
                src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
