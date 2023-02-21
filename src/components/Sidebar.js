import React from 'react';
import "../style/sidebar.css";
import linkdin from "../assets/icons/linkdin.png";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mightycoder.svg";
import { NavLink } from 'react-router-dom';
import resume from "../assets/resume.pdf";
import { motion } from 'framer-motion';
const Sidebar = () => {
const handleEmail =() =>{
window.open("mailto:ankleshdoras513@gmail.com")
  }

  const sidebar_varient = {
    hidden:{
      x:"-10vw",
      opacity:0
    },
    visible:{
     x:0,
     opacity:1,
     transition:{
      delete:0.2, duration:0.7, typeof:'spring'
     }
    }
   }

  return (
    
    <motion.div className='sidebar'
    variants={sidebar_varient}
    initial='hidden'
    animate='visible'
    
    >
      <img src={mightycoder} alt="avatar" className='sidebar__avatar'/>
      <div className="sidebar__name">Anklesh <span>Doras</span></div>
      <div className="sidebar__item sidebar__title">Web Devloper</div>

      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
<img src={tie} alt="Resume" className='sidebar__icon'/>Download Resume
        </div>
      </a>
      <figure className='sidebar__social-icons'>
      <NavLink to="https://www.linkedin.com/in/anklesh-doras" target="_blank" rel="noopener noreferrer"><img src={linkdin} alt="linkdin" className='sidebar__icon'/></NavLink>
<NavLink to="#" ><img src={facebook} alt="facebook" className='sidebar__icon'/></NavLink>
<NavLink to="#"><img src={instagram} alt="instagram" className='sidebar__icon'/></NavLink>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <NavLink to="https://github.com/anklesh-123456" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className='sidebar__icon'/>github</NavLink>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon" />
          Nagpur, India
        </div>
        <div className="sidebar__item">ankleshdoras513@gmil.com</div>
        <div className="sidebar__item">8446159439 / 8421733649</div>
      </div>

      <div className="sidebar__item sidebar__email" onClick={handleEmail}>Email Me</div>
    </motion.div>
  )
}

export default Sidebar;