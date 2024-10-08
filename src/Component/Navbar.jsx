
import { useNavigate } from "react-router-dom";
function Navbar() {
  const Navigator=useNavigate();
  function GotoHome()
  {
    Navigator('/')
  }
  return (
    <div className="navbar  text-white fixed top-0  bg-[#161616] z-[10] shadow-lg rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-md border border-gray-300 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">MovieView</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         <li  className="cursor-pointer" onClick={()=>GotoHome()}>Home</li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn h-[20px] md:w-[100px]">Button</a>
      </div>
    </div>
  );
}

export default Navbar;
