import React from "react"
import './styles.css'

const SkillCard = ({ name, icon }) => {
  return (
    <div className="skill-card">
      {/* <img> para a logo */}
      <img className="skill-logo" src={icon} alt={`Logo da tecnologia ${name}`}/>
      
      {/* Nome da tecnologia */}
      <span className="skill-name">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;