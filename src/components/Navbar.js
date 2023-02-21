import React,{useEffect, useState} from 'react';
import "../style/navbar.css";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
const Navbar = () => {

   const [active, setActive] = useState("");
   useEffect(()=>{
    let currentURL = window.location.href
    console.log(currentURL);
    if(currentURL.endsWith("/"))
    setActive("About");
    else if(currentURL.endsWith("/projects"))
    setActive("Projects")
    else if(currentURL.endsWith("/resume"))
    setActive("Resume")
   },[active])

   const navbar_varient = {
    hidden:{
      y:"-20vh",
    
    },
    visible:{
     y:0,
     
     transition:{
      delete:0.1, duration:0.5, typeof:'spring'
    }
  }
   }

  return (
    <motion.div className='navbar'
    variants={navbar_varient}
    initial='hidden'
    animate='visible'>
        <div className="navabar__active">
            {active}
        </div>
        <div className="navbar__items">
{active !== "About" &&
<NavLink to="/">
<div className="navbar__item" onClick={()=>setActive("About")}>About</div>
</NavLink>
}
{active !== "Resume" ? 
<NavLink to="/resume">
<div className="navbar__item" onClick={()=>setActive("Resume")}>Resume</div> </NavLink> : null

}

  {active !== "Projects" &&
  <NavLink to="/projects">
  <div className="navbar__item" onClick={()=>setActive("Projects")}>Projects</div>
  </NavLink> 
  }    
      
            </div>  
    </motion.div>
  )
};

export default Navbar;