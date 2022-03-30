import React from 'react';
import '../css/Intro.css';
import {Link} from 'react-router-dom';

function Intro() {
  return (
    <div className="intro-container">
        <div className="intro-left">
            <p className="intro-text-light">THIS IS ME</p>
            <h1 className="intro-name">VINH BUI</h1>
            <p className="intro-text-light intro-grey">The posibiliy is limitless and soon you will understand why. Come join me in this journey.</p>
            <Link to="/About" className="intro-button">DISCOVER NOW</Link>
        </div>
        <div className="intro-right">
            <img src={require('../img/Intro-img.png')} alt="Intro img" className="intro-img" />
        </div>
    </div>
  )
}

export default Intro