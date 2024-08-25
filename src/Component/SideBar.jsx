import { useContext } from "react";
import { MyContext } from "../Contextapi/ContextApi";

function SideBar() {
    const { MovieurlUpdate, SetGenre } = useContext(MyContext);

    function PassingDataPath(path) {
        SetGenre(null); 
        MovieurlUpdate(path);
    }

    function PassingGenre(id) {
        SetGenre(id);
    }

    return (
        <div className="w-full lg:w-[20%] min-h-[10vh] lg:min-h-[100vh] mt-[65px] lg:mt-[100px] bg-black bg-transparent backdrop-blur-md border border-white shadow-md shadow-white mx-1 my-1">
            <h1 className="mx-3 text-2xl font-bold text-yellow-300">Movie List</h1>
            <ul className="mx-3 text-white cursor-pointer">
                <li className="my-2 font-bold hover:text-black hover:px-2 hover:py-1 hover:rounded-sm hover:bg-yellow-400 min-w-[25%]" onClick={() => PassingDataPath('movie/now_playing')}>Now Playing</li>
                <li className="my-2 font-bold hover:text-black hover:px-2 hover:py-1 hover:rounded-sm hover:bg-yellow-400 min-w-[25%]" onClick={() => PassingDataPath('movie/popular')}>Popular</li>
                <li className="my-2 font-bold hover:text-black hover:px-2 hover:py-1 hover:rounded-sm hover:bg-yellow-400 min-w-[25%]" onClick={() => PassingDataPath('movie/top_rated')}>Top Rated</li>
                <li className="my-2 font-bold hover:text-black hover:px-2 hover:py-1 hover:rounded-sm hover:bg-yellow-400 min-w-[25%]" onClick={() => PassingDataPath('movie/upcoming')}>Upcoming</li>
            </ul>
            <ul className="mx-3 text-white cursor-pointer">
                <li className="my-2 font-bold hover:text-black hover:px-2 hover:py-1 hover:rounded-sm hover:bg-yellow-400 min-w-[25%]" onClick={() => PassingGenre(28)}>Action</li>
                <li className="my-2 font-bold hover:text-black hover:px-2 hover:py-1 hover:rounded-sm hover:bg-yellow-400 min-w-[25%]" onClick={() => PassingGenre(35)}>Comedy</li>
                <li className="my-2 font-bold hover:text-black hover:px-2 hover:py-1 hover:rounded-sm hover:bg-yellow-400 min-w-[25%]" onClick={() => PassingGenre(12)}>Adventure</li>
                <li className="my-2 font-bold hover:text-black hover:px-2 hover:py-1 hover:rounded-sm hover:bg-yellow-400 min-w-[25%]" onClick={() => PassingGenre(27)}>Horror</li>
            </ul>
        </div>
    );
}

export default SideBar;
