import './Logo.scss';
import Image from 'next/image';
import LogoImage from '../../assets/logo-bendi.png';

const Logo = () => {
  return (
    <Image
      alt='logo'
      className='logo'
      src={LogoImage}
      height={undefined}
      width={undefined}
    ></Image>
  );
};

export default Logo;
