import styles from './Logo.module.scss';
import Image from 'next/image';
import LogoImage from '../../assets/logo-bendi.png';

const Logo = () => {
  return (
    <Image
      alt='logo'
      className={styles.logo}
      src={LogoImage}
      height={undefined}
      width={undefined}
    ></Image>
  );
};

export default Logo;
