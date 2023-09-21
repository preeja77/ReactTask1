import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer" 
import MenuCard from '../components/MenuCard'
import Form from "../components/Form"
const Contact = () => {
  return (
    <div>
     <Navbar/>
     <MenuCard heading = "Contact US" text = "Thank you for being a valuable customer to us."/>
      <Form/>
      <Footer/>  
    </div>
  )
}

export default Contact
