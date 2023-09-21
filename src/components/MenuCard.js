import "./MenuStyles.css"

import React, {Component} from 'react'

class  MenuCard extends Component{
  render(){
    return (
      <div className="menu-img">
        <div className="heading">
          <h1 className="about-description">{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
    }
  
}

export default MenuCard

