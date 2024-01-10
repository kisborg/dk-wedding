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
    </div>
  );
};

export default Intro;
