import "./WorkCardStyles.css"

import React from 'react'
import WorkCard from "./WorkCard"
import WorkData from "./WorkData"

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Our Dishes</h1>
        <div className="project-container">
            {WorkData.map((val, index)=>{
                return(
                    <WorkCard key = {index}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}/>
                )
            })}
        </div>
    </div>
  )
}

export default Work
