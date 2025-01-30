import React from 'react';
import { motion } from 'framer-motion';
import '../../style/layout/Navigation.css';
import logo from '../../assets/images/sprite_removebg_preview.png';

const Navigation = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#branches", text: "Branches" },
    { href: "#support", text: "Support" },
    { href: "#connect", text: "Connect" }
  ];

  return (
    <motion.nav 
      className="nav-container"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="nav-logo">
        <motion.img 
          src={logo}
          alt="SmarTicket Logo" 
          className="logo-image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{color: "#ffffff"}}
        >
          SmarTicket
        </motion.span>
      </div>

      <div className="nav-links">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.text}
            href={link.href}
            custom={i}
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
          >
            {link.text}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;