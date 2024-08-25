import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchSimilarMovie from "../Services/FetchSimilarMovie";
import { IMAGE_BASE_URL } from "../helper/MovieBaseUrl";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Similar() {
  const [Page, SetPage]=useState(1)
  const { Id } = useParams();
  const Navigator = useNavigate();
  const { data, isLoading, isError, Error } = useQuery({
    queryKey: ["Similar", Id, Page],
    queryFn: () => FetchSimilarMovie(Id, Page),
    staleTime: 1000 * 60 * 20,
    cacheTime: 1000 * 60 * 20,
  });
  console.log("dataof similar", data);
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  const Filtered = data?.results?.filter(
    (movie) => movie.backdrop_path !== null
  );

  function PassingId(id) {
    Navigator(`/Watch/${id}`);
  }
  return (
    <div className="w-full bg-black min-h-[50vh]">
      <h1 className="text-4xl mx-5 font-bold my-3 text-yellow-400">
        Similar Movie{" "}
      </h1>
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] min-h-[20vh] flex  justify-center flex-wrap my-2 gap-2">
          {Filtered.map((movie) => (
            <div
              className="w-[30%] sm:w-[19%] h-[70px] sm:h-[100px] hover:w-[21%] cursor-pointer transition-all duration-300"
              key={movie.id}
              onClick={() => PassingId(movie.id)}
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
      <div className="flex w-full min-h-[10vh] mt-5 bg-black justify-center">
        <div className="flex gap-3 ">
          {" "}
          <button className="lg:w-[140px] w-[100px] bg-white h-[40px] text-black font-bold rounded-[20px]" onClick={()=> Page>1 && SetPage(Page-1)}>Prev</button>
          <button className="lg:w-[140px] w-[100px] bg-yellow-500 h-[40px] font-bold text-black rounded-[20px]" onClick={()=>SetPage(Page+1)}>Next</button>
        </div>
      </div>
    </div>
  );
}
export default Similar;
