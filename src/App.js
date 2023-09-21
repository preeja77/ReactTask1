import React from "react"
import './App.css';
import Home from "./routes/Home"
import About from "./routes/About"
import Menu from "./routes/Menu"
import Contact from "./routes/Contact"
import Login from "./routes/Login"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/menu" element = {<Menu/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/login" element = {<Login/>} />
      </Routes>
      </>
    </div>
  );
}

export default App;
