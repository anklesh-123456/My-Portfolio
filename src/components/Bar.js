import React from 'react';
import "../style/bar.css"
const Bar = ({language:{icon, name, level}}) => {
  const bar_width = `${level}%`
  return (
  <div className="bar">
    <div className="bar__wrapper" style={{"width": bar_width}}>
        <span className="bar__name">
            <img src={icon} alt="icon" className='bar__icon'/>{name}
        </span>
      
    </div>
  </div>
  )
}

export default Bar;