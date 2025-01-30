import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../../style/Hero/Hero.css';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px 0px",
    once: false
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(157, 102, 166, 0.5)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div ref={ref}>
      <motion.div
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="hero-wrapper">
          <div className="hero-content">
            <motion.div className='Title-container' variants={itemVariants}>
              <motion.h1 className="Title">
                SmarTicket
              </motion.h1>
              <motion.h2 className="Subtitle">
                A smart system for selling tickets that covers all the needs of your organization
              </motion.h2>
            </motion.div>
            <motion.div className='Phone-container' variants={itemVariants}>
              <img className="phone-model" src="../../src/assets/images/Iphone.png" alt="phone" />
            </motion.div>
            <motion.div className='Description-container' variants={itemVariants}>
              <p>Ticketing made easy, intelligent, and impactful – for businesses and their customers</p>
              <motion.button
              className="contact-button"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Contact Us
            </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;