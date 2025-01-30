import React from 'react';
import { motion, useInView } from 'framer-motion';
import '../../style/SellChannels/SellChannels.css';

const SellChannelsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUpVariants = {
    hidden: { 
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="sell-section">
      <motion.div
        className="sell-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="main-title"
          variants={fadeUpVariants}
        >
          Sell across all channels
        </motion.h1>

        <motion.h2 
          className="subtitle"
          variants={fadeUpVariants}
        >
          A smart ticketing system that covers all your organization's needs
        </motion.h2>

        <motion.p 
          className="description"
          variants={fadeUpVariants}
        >
          Provides flexible ticketing solutions that increase sales and cover all of
          an organization's needs. Our technology encompasses event management, streamlines
          operations, and reduces expenses.
        </motion.p>

        <motion.div 
          className="cards-container"
          variants={containerVariants}
        >
          <motion.div 
            className="card"
            variants={fadeUpVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="card-content">
              <img src="../../src/assets/images//models/iPhones.png" alt="Mobile app" />
              <h3>Online E-Ticket Platform</h3>
              <p>The most powerful tool on the market for online tickets, Offer your customers a simple and fast ticket purchase process. With an interface developed especially for Israelis, your audience is guaranteed an intuitive and effortless purchase.</p>
            </div>
          </motion.div>

          <motion.div 
            className="card"
            variants={fadeUpVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="card-content">
              <img src="../../src/assets/images//models/iMac.png" alt="Desktop platform" />
              <h3>A dedicated solution for your industry</h3>
              <p>From theaters, cultural performances, museums and visitor centers, to sporting events, attractions and leisure, to festivals</p>
            </div>
          </motion.div>

          <motion.div 
            className="card"
            variants={fadeUpVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            
          >
            <div className="card-content">
              <img src="../../src/assets/images/models/MacBook.png" alt="Web platform" />
              <h3>It's easy and simple.</h3>
              <p>Offer your customers a simple and fast ticket purchasing process.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SellChannelsSection;