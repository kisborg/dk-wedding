import Image, { StaticImageData } from 'next/image';
import styles from './Schedule.module.scss';
import { motion } from 'framer-motion';

export type ScheduleItemProps = {
  image: StaticImageData;
  description: string;
  time: string;
  animationStart: number;
};

const ScheduleItem = ({
  image,
  description,
  time,
  animationStart,
}: ScheduleItemProps) => {
  return (
    <div className={styles.scheduleItem}>
      <motion.div
        animate={{ height: '100%', display: 'flex', justifyContent: 'center' }}
        transition={{ duration: 0.5, delay: animationStart }}
        initial={{ height: '0px', overflow: 'hidden' }}
      >
        <div className={styles.scheduleItemFlexContainer}>
          <div className={styles.scheduleItemImageContainer}>
            <Image
              className={styles.scheduleItemImage}
              src={image}
              alt='schedule-icon'
            />
          </div>
          <p className={styles.scheduleItemDescription}>{description}</p>
          <p className={styles.scheduleItemTime}>{time}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ScheduleItem;
