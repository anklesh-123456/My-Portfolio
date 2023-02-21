import React from 'react';
import Bar from './Bar';
import "../style/resume.css";
import { motion } from 'framer-motion';
import languages from "./data/Resume_data";


const Resume = () => {
  const resume_varient = {
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
  <motion.div className="container resume"
  variants={resume_varient}
 initial='hidden'
 animate='visible'
 exit='exit'
  >
    <div className="row">
      <div className="resume__card">
        <h4 className="resume-card__heading">
          Eaducation
        </h4>
        <div className="resume-card__body">
          <h5 className="resume-card__title">
            Mechanical Engineering
          </h5>
         <p className="resume-card__name">
         GH Raisoni Academy of Engineering & Technology (2017 - 2020).
         </p>
         <p className="resume-card__Detail">
          I am Completed My BE in Mechanical Engineering from GH Raisoni Academy of Engineering & Technology Nagpur, my CGPA is 8.02.
         </p>
        </div>
      </div>
    </div>
    <div className='row'>
    <div className="col-lg-12 resume-languages ">
      <h5 className="resume-language__heading">Language and Framework</h5>
      <div className="resume-language__body ">
        {
languages.map(language =>
  <Bar language={language}/>
  )
        }
      </div>
    </div>
    </div>
  </motion.div>
  )
}

export default Resume;