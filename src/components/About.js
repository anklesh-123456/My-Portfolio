import React from 'react';
import Skillcard from './Skillcard';
import "../style/about.css";
import { motion } from 'framer-motion';
import skills from './data/About_data';
const About = () => {

  const about_varient = {
    hidden:{
      opacity:0
    },
    visible:{
     opacity:1,
     transition:{
      delete:0.2, duration:0.6,
     }
    },
    exit:{
      opacity:0,
      transition:{
        ease:'easeInOut'
      }
    }
   }

  return (
 <motion.div className="about"
 variants={about_varient}
 initial='hidden'
 animate='visible'
 exit='exit'
 >
  <h6 className="about__intro">
    I describe myself as someone who's persistant, a quick learner and love Web Development and problem solving by using simple and scalable solution
  </h6>
  <div className="container about__container">
    <h6 className=" about__heading">What I offer</h6>
    <div className="row skills">
      {
       skills.map(skill =>
       <Skillcard skill={skill}/>
       )
      }
    </div>
  </div>
 </motion.div>
  )
}

export default About;