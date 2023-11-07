import React from 'react';
import "./Skills.scss";
import { motion } from "framer-motion";
import {images} from "../../constants";

const Skills = () => {
  
  const skills = [
  	{ name: "React", icon: images.react},
  	{ name: "Redux", icon: images.redux},
  	{ name: "Javascript", icon: images.javascript},
  	{ name: "Sass", icon: images.sass},
  	{ name: "MaterialUi", icon: images.mu5},
    {name: "Git", icon: images.git},
    { name: "nodejs", icon: images.node},
  	{ name: "MongoDB", icon: images.mongodb},
  	
  	];

	return (
		<div className="app__skills" id="Skills">
			<h2 className="head-text"> Skills</h2>

			<div className="skills__container">
			<motion.div className="skills__list">
				{skills.map((skill) => (
					<motion.div
				 whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills__item app__flex"
              key={skill.name}>
					  <div className="app__flex">
					  	<img src={skill.icon} alt={skill.name} />
					  </div>
					  <p className="p-text">{skill.name}</p>
				</motion.div>
					))}
			</motion.div>
				
			</div>
		</div>
	)
}

export default Skills