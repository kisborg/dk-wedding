import Logo from '../Logo/Logo';
import styles from './Intro.module.scss';
import MainImage from '../../assets/dk-bg.png';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <Logo />
      <Image
        alt='main-image'
        className={styles['intro-image']}
        src={MainImage}
      ></Image>
      <div className={styles.date}>
        <div className={styles.month}>JUNE</div>
        <div className={styles.dayandyear}>
          8<br />
          2024
        </div>
        <div className={styles.dayintext}>SATURDAY</div>
      </div>
    </div>
  );
};

export default Intro;
