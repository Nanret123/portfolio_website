import React, { useState } from 'react';
import "./Projects.scss";
import { motion } from "framer-motion";
import {images} from "../../constants";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});

  const projects = [
    {image: images.social_media, name: "Social Media App", projectLink: "https://social-media-app-jet.vercel.app/", codeLink: "https://github.com/Nanret123/Social_media_app.git", title: "Social Media Web Application", description: "Designed a user-friendly social media app fullstack appication fostering effortless interactions, and also beautiful moments." , tags: ["MERN"] },
    {image: images.e_commerce, name: "E-Commerce Web App", projectLink: "https://e-commerce-six-pink.vercel.app/", codeLink: "https://github.com/Nanret123/e-commerce.git", title: "E-Commerce Web App", description: "Created an intuitive  fullstack e-commerce platform that offers a seamless shopping experience. Users can explore products, and also view detailed descriptions. add to cart and also place orders", tags: ["MERN"] },
    {image: images.real_estate, name: "Real Estate Application", projectLink: "https://real-estate-tau-blond.vercel.app/", codeLink: "https://github.com/Nanret123/Real-Estate.git", title: "Real Estate Web API", description: "Developed a real estate web API that simplifies property searches, enabling users to explore listings, mark and view favorites, access detailed descriptions, and schedule viewings.", tags: ["Nodejs"]},
  	];

	return (
		<motion.div 
    id="Projects"
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
		className="app__project app__flex">
			<h2 className="head-text" style={{marginBottom: "2rem"}}>My <span>Portfolio</span> Section</h2>
        
        <motion.div 
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__portfolio">
        	{projects.map((work, index) => (
        		<div className="project__item app__flex" key={index}>
        			<div className="project__item__image app__flex">
        				<img src={work.image} alt={work.name} />
        				<motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="project__hover app__flex"
              >
                 <a href={work.projectLink} target="_blank" rel="noreferrer">
                 	<motion.div
                  whileInView={{ scale: [0,1]}}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                className="app__flex">
                 		<AiFillEye />
                 	</motion.div>
                 </a>

                 <a href={work.codeLink} target="_blank" rel="noreferrer">
                 	<motion.div
                  whileInView={{ scale: [0,1]}}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                className="app__flex">
                 		<AiFillGithub />
                 	</motion.div>
                 </a>

              </motion.div>
        			</div>

        			<div className="project__work__content app__flex">
        				<h4 className="bold-text">{work.title}</h4>
        				<p className="p-text" style={{marginTop: 10, textTransform: "capitalize"}}>{work.description}</p>

        				<div className="project__work-tag app__flex">
        					<p className="p-text">{work.tags[0]}</p>
        				</div>
        			</div>
        		</div>
        		))}
        </motion.div>
		</motion.div>
	)
}

export default Projects