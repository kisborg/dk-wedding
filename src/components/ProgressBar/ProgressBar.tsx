import * as React from 'react';
import './ProgressBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';

export interface IProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const progressBarAnimation = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
};

export function ProgressBar({ currentStep, totalSteps }) {
  const progress = React.useRef<HTMLDivElement>(null);
  const control = useAnimation();

  React.useEffect(() => {
    control.start('visible');
  }, []);
  React.useEffect(() => {
    if (progress.current) {
      progress.current.style.width = `${(currentStep / totalSteps) * 100}%`;
      progress.current.style.opacity = '1';
    }

    if (currentStep >= 6) {
      control.start('hidden');
    }
  }, [currentStep, totalSteps]);
  return (
    <motion.div
      variants={progressBarAnimation}
      initial='hidden'
      animate={control}
    >
      <div className='progress-bar'>
        <div ref={progress} className='js-completed-bar completed-bar'>
          <hr className='completed-bar__dashed' />
          <FontAwesomeIcon className='truck' icon={faChampagneGlasses} />
        </div>
      </div>
    </motion.div>
  );
}
