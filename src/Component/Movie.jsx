import React, { useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useFetchMovies from "../Services/FetchImdbData";
import { MyContext } from "../Contextapi/ContextApi"; 
import { IMAGE_BASE_URL } from "../helper/MovieBaseUrl";
import Banner from "../Banner/Banner";
import useFetchGenre from "../Services/FetchGenreData";

const Movie = () => {
  const { movieUrl, updateBanner, Genre, SetGenre } = useContext(MyContext);
  const fetchMovies = useFetchMovies();
  const fetchGenreMovie = useFetchGenre();
  const queryClient = useQueryClient();

  
  const queryKey = Genre !== null ? ["movies", "genre", Genre] : ["movies", movieUrl];
  const queryFn = Genre !== null ? fetchGenreMovie : fetchMovies;

  console.log("Current queryKey:", queryKey);
  console.log("Current movieUrl:", movieUrl);
  console.log("Current Genre:", Genre);

  const { data, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn,
    onSuccess: () => {
      console.log("Data fetched successfully.");
      if (Genre !== null) {
        console.log("Resetting Genre...");
        SetGenre(null);
      }
    },

  });



  function BannerImageUpdate(movie) {
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
    console.log("Error:", error);
    return (
      <div className="flex justify-center items-center mt-[100px] text-red-500">
        Error: {error?.message || "An error occurred"}
      </div>
    );
  }

  console.log("Fetched Data:", data);

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
