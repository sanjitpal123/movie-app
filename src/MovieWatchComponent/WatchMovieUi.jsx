import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchMovieVideos from "../Services/FetchVideo";
import { useParams } from "react-router-dom";
import Similar from "./SimilarMovie";

function MovieWatch() {
  const { Id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["videos", Id],
    queryFn: () => fetchMovieVideos(Id),
    staleTime: 1000 * 60 * 20,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  console.log("traler", data);

  if (data && data.results && data.results.length > 0) {
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    return (
      <div className="w-full   bg-black min-h-[30vh] lg:min-h-[100vh]">
        <div className="bg-black ">
          {trailer ? (
            <div>
              <h1>{trailer.name}</h1>
              <iframe
                className="lg:min-h-[80vh] h-[40vh] sm:h-[40vh] mt-[30px]  md:mt-[50px] w-full"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p>No trailer available</p>
          )}
        </div>
     <Similar/>
      </div>
    );
  }

  return <div>No video data available</div>;
}

export default MovieWatch;
