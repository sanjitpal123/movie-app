
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Banner from "../Banner/Banner";
import Movie from "./Movie";
function HomePage()
{
    return (
        <>
        <Navbar/>
    
    <div className='lg:flex'><SideBar/>
    <Movie/></div>
        </>
    )

}
export default HomePage;