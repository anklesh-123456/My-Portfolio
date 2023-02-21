import React from 'react'
import "../style/skillcard.css"
const Skillcard = ({skill:{icon, title, About}}) => 

<div className="skill-card">
  <img src={icon} alt="icon" className="skill-card_icon"/>
  <div className="skill-card-body">
    <h6 className="skill-card_title">{title}</h6>
    <p className="skill-card_content">{About}</p>
  </div>
</div>


export default Skillcard