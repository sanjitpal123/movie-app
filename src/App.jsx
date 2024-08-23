import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Banner/Banner'
import Movies  from './Component/Movie'
import Navbar from './Component/Navbar'
import MyContextProvider from './Contextapi/ContextApi'
import SideBar from './Component/SideBar'
function App() {
 

  return (
    <MyContextProvider>
    <Navbar/>
    <div className='lg:flex'><SideBar/>
    <Movies/></div>
      
    </MyContextProvider>
  )
}

export default App
