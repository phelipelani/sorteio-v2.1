import { motion } from 'framer-motion';

const AnimatedLetters = ({ text, fontSize, color, fontFamily }) => {
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
    },
  };

  const letterStyle = {
    fontSize,
    color,
    fontFamily,
    marginRight: '0.2rem',
  };

  return (
    <motion.div
      style={{ display: 'flex', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} style={letterStyle} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedLetters;