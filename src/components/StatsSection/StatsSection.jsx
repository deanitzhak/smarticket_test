import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import '../../style/StatsSection/StatsSection.css';

const StatsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: false
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const stats = [
    { title: 'Customers', value: '350+' },
    { title: 'Tickets per year', value: '10,000' },
    { title: 'Events a year', value: '1,000,000' },
    { title: 'Years of activity', value: '20+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="stats-container"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.title}
          className="stat-item"
          variants={itemVariants}
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: {
              duration: 0.2,
              ease: "easeOut"
            }
          }}
          animate={{ y: 0 }}
        >
          <div className="stat-content">
            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-value">{stat.value}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;