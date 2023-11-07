import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about" id="About">
      <h2 className="head-text" style={{ marginTop: "2rem" }}>
        About Me
      </h2>

      <div className="about__container">
        <div className="about__info">
          <h2>Welcome</h2>
          <p className=" about__desc p-text">
            Hi there, I'm an African-born web developer named Nanret Gungshik.
            Developing cutting-edge software solutions that improve user
            experiences while also solving problems is my passion. I have a
            natural ability to solve problems, I enjoy coming up with original
            ideas, and I'm constantly keen to pick up new abilities.
          </p>
          <p className="about__desc">
            I have a strong interest in web development and am always learning
            about the newest developments in technology. My passion motivates me
            to investigate cutting-edge technological advancements and make a
            significant contribution to user-centered apps. I firmly think that
            technology has the ability to change people's lives, and I'm
            dedicated to developing software that does just that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
