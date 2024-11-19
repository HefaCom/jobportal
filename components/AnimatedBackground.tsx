'use client'
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{ top: `${(i + 1) * 20}%` }}
          animate={{
            x: ['-100%', '100%'],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 10 + i * 2,
              ease: 'linear',
            },
          }}
        />
      ))}
      
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`vertical-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{ left: `${(i + 1) * 20}%` }}
          animate={{
            y: ['-100%', '100%'],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 10 + i * 2,
              ease: 'linear',
            },
          }}
        />
      ))}
      
      {/* // Adding moving and growing dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: '5px',
            height: '5px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, Math.random() * 50 - 25, 0], // Random horizontal movement
            y: [0, Math.random() * 50 - 25, 0], // Random vertical movement
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
              ease: 'easeInOut',
            },
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
