import React, { useState } from 'react';
import data_projects from './data/Projects_data';
import "../style/projects.css";
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState(data_projects)

  const handleFilterCategory = (name) => {
   const new_arrey = data_projects.filter(project => project.category.includes(name))
   setProjects(new_arrey)
  }

  const project_varient = {
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
    <motion.div className="container project"
    variants={project_varient}
    initial='hidden'
    animate='visible'
    exit='exit'
    
    >
      <div className="projects_navbar">
<div onClick={()=> setProjects(data_projects)}>All</div>
<div onClick={()=> handleFilterCategory('react.js')}>React</div>
<div onClick={()=> handleFilterCategory('Redux')}>Redux</div>
<div onClick={()=> handleFilterCategory('node.js')}>Node</div>
<div onClick={()=> handleFilterCategory('mongoDB')}>MongoDB</div>
<div onClick={()=> handleFilterCategory('MERN')}>MERN</div>
      </div>
      <div className="row">
        {
projects.map(project =>
  <ProjectCard key={project.name} project={project}/>
  )
        }
      </div>
    </motion.div>
  )
}

export default Projects;