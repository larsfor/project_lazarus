import React from 'react';
import { Link } from 'react-router-dom';

function TopNavbar() {
  return (
    <div id="navbar">
      <Link to="/"><h4>Project Lazarus</h4></Link>
      <Link to="/">Home</Link>
      <div id="dropdown">
        <button id="dropbtn">Courses
          <i id="fa fa-caret-down"></i>
        </button>
        <div id="dropdown-content">
          <Link to="home/excel">Excel</Link>
          <Link to="home/programming">Programming</Link>
        </div>
      </div>
      <Link to="home/contact">Contact</Link>
    </div>
  )
}

export default TopNavbar;