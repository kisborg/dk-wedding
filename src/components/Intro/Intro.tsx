import Logo from '../Logo/Logo';
import './intro.scss';
import MainImage from '../../assets/dk-bg.png';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className='intro'>
      <Logo />
      <Image alt='main-image' className='intro-image' src={MainImage}></Image>
    </div>
  );
};

export default Intro;
