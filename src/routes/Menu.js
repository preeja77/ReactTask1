import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer" 
import MenuCard from "../components/MenuCard"
import Work from '../components/Work'

const Menu = () => {
  return (
    <div>
      <Navbar/>
      <MenuCard heading = "Why Choose US?" text = "We use both original recipes and classic versions of famous food items."/>
      <Work/>
      <Footer/>      
    </div>
  )
}

export default Menu
