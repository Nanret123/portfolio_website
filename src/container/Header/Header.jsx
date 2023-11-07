import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../constants";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <div id="Home" className="app__header app__flex">
      <div className="app__header-content">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <p className="info-p1">Hello, I'm</p>
          <h1 className="info-title">Nanret Gungshik</h1>
          <p className="info-p2">
            And I am a <span> Backend Web Developer</span>
          </p>
          <div className="btn-container"></div>

          <div className="social-media">
            <a
              href="https://twitter.com/_nan_ret_"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://github.com/Nanret123"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub rel="noreferrer" />
            </a>
            <a
              href="www.linkedin.com/in/nanret-gungshik-37a146216"
              target="_blank"
            >
              <AiFillLinkedin rel="noreferrer" />
            </a>
          </div>
          <a href="#" target="_blank" className="app__header-btn">
            Download CV
          </a>
        </motion.div>
      </div>

      <div className="app__header-img">
        <img src={images.profile_pic} alt="profile-img" />
      </div>
    </div>
  );
};

export default Header;
