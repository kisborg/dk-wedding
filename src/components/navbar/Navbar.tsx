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
      <div className='nav-menu-item'>
        <a onClick={() => onNavigation('intro')}>{t('home')}</a>
      </div>
      <div className='nav-menu-item'>
        <a onClick={() => onNavigation('about-us')}>{t('aboutUs')}</a>
      </div>
      <div className='nav-menu-item'>
        <a onClick={() => onNavigation('schedule')}>{t('schedule')}</a>
      </div>
      {/* <div className='nav-menu-item'>
        <a onClick={() => onNavigation('rsvp')}>{t('rsvp')}</a>
      </div> */}
      <div className='nav-menu-item'>
        <a onClick={() => onNavigation('venue')}>{t('venue')}</a>
      </div>
    </nav>
  );
};

export default Navbar;
