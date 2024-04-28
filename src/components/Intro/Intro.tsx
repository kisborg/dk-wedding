import Logo from '../Logo/Logo';
import styles from './Intro.module.scss';
import MainImage from '../../../public/images/main_bg_new_2.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <Logo />
      <motion.div
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1,
          type: 'spring',
        }}
        initial={{ scale: 0, rotate: -40 }}
      >
        <Image
          alt='main-image'
          className={styles['intro-image']}
          src={MainImage}
        ></Image>
      </motion.div>
      <motion.div
        className='date-animation-container'
        animate={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        transition={{ duration: 2, delay: 1 }}
        initial={{ width: '0px', overflow: 'hidden' }}
      >
        <div className={styles.date}>
          <div className={styles.month}>JUNE</div>
          <div className={styles.dayandyear}>
            8<br />
            2024
          </div>
          <div className={styles.dayintext}>SATURDAY</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
