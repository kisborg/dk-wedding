'use client';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import './navbar.scss';
import { Page } from '@/app/[locale]/page';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher/LanguageSwitcher';

interface NavigationProps {
  onNavigation: Dispatch<SetStateAction<string>>;
}

const Navbar = ({ onNavigation }: NavigationProps) => {
  const navbarRef = useRef<HTMLElement>(null);
  const [isSmall, setIsSmall] = useState<boolean>(false);
  const t = useTranslations('Navbar');
  useEffect(() => {
    if (navbarRef.current) {
      const navbar = navbarRef.current;
      const mainContainer = document.querySelector('.main') as HTMLElement;
      if (mainContainer) {
        let prevScrollPos = mainContainer.scrollTop;
        mainContainer.addEventListener('scroll', () => {
          let hideTimer;
          clearTimeout(hideTimer);
          const currentScrollPos = mainContainer.scrollTop;
          if (mainContainer.scrollTop === 0) {
            prevScrollPos = mainContainer.scrollTop;
            navbar.classList.remove('hidden');
            return;
          }

          if (prevScrollPos < currentScrollPos) {
            navbar.classList.add('hidden');
          } else {
            navbar.classList.remove('hidden');

            hideTimer = setTimeout(() => {
              navbar.classList.add('hidden');
            }, 1500);
          }

          prevScrollPos = mainContainer.scrollTop;
        });
      }
    }
  });

  useEffect(() => {
    if (navbarRef.current === null) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentWidth = navbarRef.current!.clientWidth;
      if (currentWidth < 768) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    });
    resizeObserver.observe(navbarRef.current);
    return () => resizeObserver.disconnect();
  }, [isSmall]);

  return (
    <nav ref={navbarRef} id='navbar'>
      <div className='language-switcher'>
        <LanguageSwitcher isSmall={isSmall} />
      </div>
      <div onClick={() => onNavigation('intro')} className='nav-menu-item'>
        {t('home')}
      </div>
      <div onClick={() => onNavigation('about-us')} className='nav-menu-item'>
        {t('aboutUs')}
      </div>
      <div onClick={() => onNavigation('schedule')} className='nav-menu-item'>
        {t('schedule')}
      </div>
      {/* <div className='nav-menu-item'>
        <a onClick={() => onNavigation('rsvp')}>{t('rsvp')}</a>
      </div> */}
      <div onClick={() => onNavigation('venue')} className='nav-menu-item'>
        {t('venue')}
      </div>
    </nav>
  );
};

export default Navbar;
