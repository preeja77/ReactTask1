import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer" 
import MenuCard from "../components/MenuCard"
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <MenuCard  heading = "Better food for more people"
      text ="For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries."/>
      <AboutContent/>
      <Footer/> 
    </div>
  )
}

export default About
