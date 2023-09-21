import "./LoginSignUp.css"

import React from 'react'




const LoginSignUp = () => {
  return (
    <div className="login-container">
        <div className="login-header">
            <div className="text">
                Sign Up
            </div>
            <div className="inputs">
            <label className="name">Name</label>
                <div className="input">
                    <input type = "text" placeholder = "enter you name here"/>
                </div>
                <label className="name">Email</label>
                <div className="input" >
                    <input type = "email" placeholder = "please provide an email"/>
                </div>
                <label className="name">Password</label>
                <div className="input" >
                    <input type = "password" placeholder = "provide the right Password"/>
                </div>
            </div>
            <div className="forgot-password">Lost Password?<span>Click here</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
      
    </div>
  )
}

export default LoginSignUp
