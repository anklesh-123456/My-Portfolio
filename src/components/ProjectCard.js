import React from 'react';
import github from '../assets/icons/github.svg';
import "../style/projectcard.css";
const ProjectCard = ({project: { name, image, deployed_url, github_url}}) => {
  return (
   <div className="projectcard col-md-6 col-lg-4">
    <figure className=" projectcard__wrapper ">
      <a href={deployed_url}  target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} className="projectcard__image" />
      </a>
      <div className="projectcard__title">
      <a href={github_url} target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github link" className="projectcard__icon" />
      </a>
      {name}
      </div>
    </figure>
   </div>
  )
}

export default ProjectCard;
