import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p className="about-description">For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice.
</p>        <Link to="/contact">
            <button className="btn">Contact</button>
</Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                    alt = "true" className="img"/>     
                </div>
                <div className="img-stack bottom">
                    <img src = "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt = "true" className="img"/>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent

