import { useState } from 'react';
import Home from './components/home'
import { Router, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { MdHome, MdOutlineAdd } from "react-icons/md";


function App() {

  return (
    <BrowserRouter>
        <div className="background-img"></div>
        <div className='green-filter'></div>
        <div className="container">
          <div className='navigation'>
          <Link className="nav-button" to="/"><MdHome /></Link>
            <h1 className='title'>Tree Media</h1>
            <Link className="nav-button" to="/add"><MdOutlineAdd /></Link>
          </div>
          
          
          <Home />
        </div>
    </BrowserRouter>
  )
}

export default App
