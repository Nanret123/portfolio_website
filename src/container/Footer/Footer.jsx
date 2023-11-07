import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("submitted");
      setLoading(false);
      setIsFormSubmitted(true);
    }, 5000);
  };

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__footer"
      id="Contact"
    >
      <h2 className="head-text">Chat with me</h2>

      <div className="footer__cards">
        <div className="footer__card">
          <img src={images.email} alt="email" />
          <a href="mailto:nanretgungshik@gmail.com" className="p-text">
            nanretgungshik@gmail.com
          </a>
        </div>
        <div className="footer__card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+234 (811) 900-1184" className="p-text">
            +234 (811) 900-1184
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="footer__form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              type="email"
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </motion.div>
  );
};

export default Footer;
