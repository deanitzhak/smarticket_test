import React from 'react';
import { motion } from 'framer-motion';
import '../../style/layout/LogoCarousel.css';

const LogoCarousel = () => {
  const logos = [
    'https://support.smarticket.co.il/uploads/upld679f2734720aa726686757.png',
    'https://support.smarticket.co.il/uploads/upld679f271dc5efc893585391.png',
    'https://support.smarticket.co.il/uploads/upld679f27093d2c5382194732.png',
    'https://support.smarticket.co.il/uploads/upld679f26f058929846642339.png',
    'https://support.smarticket.co.il/uploads/upld679f26dded557444335843.png',
    'https://support.smarticket.co.il/uploads/upld679f26caaad6c814162983.png',
    'https://support.smarticket.co.il/uploads/upld679f26b326481796916702.png',
    'https://support.smarticket.co.il/uploads/upld679f269ee343c788943420.png'
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