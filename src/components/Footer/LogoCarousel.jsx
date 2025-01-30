import React from 'react';
import { motion } from 'framer-motion';
import '../../style/layout/LogoCarousel.css';

const LogoCarousel = () => {
  const logos = [
    '/src/assets/images/logos/Frame 2 (1).png',
    '/src/assets/images/logos/Frame 2 (2).png',
    '/src/assets/images/logos/Frame 2 (3).png',
    '/src/assets/images/logos/Frame 2 (4).png',
    '/src/assets/images/logos/Frame 2 (5).png',
    '/src/assets/images/logos/Frame 2 (6).png',
    '/src/assets/images/logos/Frame 2 (7).png',
    '/src/assets/images/logos/Frame 2.png'
  ];

  return (
    <div className="logo-section">
      <motion.div 
        className="logo-track"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear"
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            alt={`Partner Logo ${i + 1}`}
            className="logo-item"
            whileHover={{ 
              scale: 1.1,
              filter: "grayscale(0%)",
              opacity: 1 
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;