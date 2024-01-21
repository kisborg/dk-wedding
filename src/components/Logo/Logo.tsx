import styles from './Logo.module.scss';
import Image from 'next/image';
import LogoImage from '../../../public/images/logo-bendi.png';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        alt='logo'
        className={styles.logo}
        src={LogoImage}
        height={undefined}
        width={undefined}
      ></Image>
    </motion.div>
  );
};

export default Logo;
