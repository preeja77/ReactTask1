import "./BackgroundImageStyles.css"

import React from 'react'

import {Link} from "react-router-dom"

const BackgroundImage = () => {
  return (
    <div className="bgImage">
        <div className="section">
        <div className="content">
            <h1 className="content-head">Get Delicious Food Anytime</h1>
            <p className="content-description">Eat Smart and Healthy</p>
            <div className="buttons-container">
            <Link to="/menu" className = "btn">Menus</Link>
            <Link to = "/contact" className = "btn btn-light">Contact</Link>
            </div>
            </div>
        </div>
       
      
    </div>
  )
}

export default BackgroundImage