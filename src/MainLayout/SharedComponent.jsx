
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
function SharedComponent()
{
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
export default SharedComponent;