import React from 'react'
import Navbar from '../components/Navbar'
import BackgroundImage from "../components/BackgroundImage" 
import Footer from "../components/Footer" 
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <BackgroundImage/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
