import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import myImage from '../assets/quizgen_removebg.png';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={myImage} alt="logo error" style={{ width: '100px', height: 'auto' }} /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" style={{paddingTop:5}}>
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{paddingTop:5}}>
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item" style={{paddingTop:5}}>
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item" style={{paddingTop:5}}>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{margin:0}}>
                <button class="button-container miq55g7">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
