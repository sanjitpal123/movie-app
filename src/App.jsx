import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Banner from './Banner/Banner';
import Movies from './Component/Movie';
import Navbar from './Component/Navbar';
import MyContextProvider from './Contextapi/ContextApi';
import SideBar from './Component/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedComponent from './MainLayout/SharedComponent';
import HomePage from './Component/HomePage';
import MovieWatch from './MovieWatchComponent/WatchMovieUi';

function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedComponent />}>
            <Route index element={<HomePage />} />
            <Route path='/Watch/:Id' element={<MovieWatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
