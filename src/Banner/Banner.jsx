// src/components/Banner.jsx

import React, { useContext } from "react";
import { MyContext } from "../Contextapi/ContextApi";
import { IMAGE_BASE_URL } from "../helper/MovieBaseUrl";
const Banner = () => {
  const { Movie } = useContext(MyContext);
  console.log("ndflsdflsdlfds",Movie)
  const movieTitle = Movie?.original_title?.toUpperCase() || "Default Title";

  return (
    <div className=" w-full flex justify-center min-h-[60vh]">
      <div className="md:w-[90%]  rounded-[20px] mt-[20px] md:mt-[100px] w-full flex flex-wrap  bg-black min-h-[60vh]">
    
      <div className=" w-full md:w-[50%] min-h-[40vh] md:h-[60vh]">
          <img
            src={`${IMAGE_BASE_URL}${Movie.backdrop_path}`}
            className="w-full h-full rounded-[20px]"
          />
        </div>
        
        
        <div className="md:w-[50%] w-full text-center flex justify-center items-center">
          <div className=" w-full mx-2 sm:mx-3 md:mx-4 md:w-[80%] text-start min-h-[80%] ">
            <h1 className="text-white font-bold text-4xl">{movieTitle}</h1>
            <p className="text-gray-500">{Movie?.overview?.toUpperCase()}</p>
            <div className="flex  items-center my-5 gap-8 flex-wrap ">
              <div className="flex gap-2 justify-center items-center">
                <div>
                  {" "}
                  <button className="px-1 my-1 font-bold text-black rounded-sm bg-yellow-400">
                    Vote
                  </button>
                </div>

                <div className="text-white font-bold">{Movie.vote_average}</div>
              </div>
              <div>
                <div className="flex  items-center gap-2 w-full"> 
                  <h2 className="text-white font-bold">RELEASE DATE - </h2>
                  <span className="text-yellow-400">{Movie.release_date}</span>
                </div>
             
              </div>
      
            </div>
            <div className="Watch flex  gap-4 ">
            <button className="text-black bg-yellow-400 py-2  px-2 rounded-[10px] font-bold hover:bg-yellow-100 ">Watch</button>
            <button className="text-black bg-yellow-400 px-2 py-2 rounded-[10px] font-bold hover:bg-yellow-200 ">Exlore</button>
          </div>
          </div>
         
        </div>
       
      </div>
    </div>
  );
};

export default Banner;
