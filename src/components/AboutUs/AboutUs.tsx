import { useEffect } from 'react';
import './AboutUs.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};
const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  });

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
      className='box'
    >
      <h1>Box + {num}</h1>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='animation-container'>
        <Box num={1} />
      </div>
      <div className='animation-container'>
        <Box num={2} />
      </div>
      <div className='animation-container'>
        <Box num={3} />
      </div>
    </div>
  );
};

export default AboutUs;
