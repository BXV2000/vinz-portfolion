import React from 'react';
import '../css/ToPortfolio.css';
import {Link} from 'react-router-dom';

function ToPortfolio() {
  return (
    <div className="to-portfolio-container">
        <div className="to-portfolio-left">
            <img src={require('../img/ToPortfolio.png')} alt="Intro img" className="to-portfolio-img" />
        </div>
        <div className="to-portfolio-right">
            <p className="to-portfolio-text-light">ABOUT ME</p>
            <h1 className="to-portfolio-name">PERSONAL DETAILS</h1>
            <p className="to-portfolio-text-light to-portfolio-grey">I started small but that does not mean I willing to be small forever. Take a look at how I grow.</p>
            <Link to="/portfolio" className="to-portfolio-button">VIEW FULL DETAILS</Link>
        </div>
        
    </div>
  )
}

export default ToPortfolio