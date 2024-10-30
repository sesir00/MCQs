import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="banner">
            <div className="navbar">
               
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Register Now</a></li>
                </ul>
            </div>

            <div className="content">
                <h1>Create MCQs Questions</h1>
                <p>Generate, Learn, Succeed!</p>
                <div>
                    <button onClick={redirectToNextPage1}>
                        <span></span>LEARN MORE
                    </button>
                    <button onClick={redirectToNextPage2}>
                        <span></span>Generate questions
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
