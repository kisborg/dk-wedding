'use client';
import { useEffect, useRef } from 'react';
import './navbar.scss';

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
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
  return (
    <nav ref={navbarRef} id='navbar'>
      <div className='nav-menu-item'>
        <a href='#intro'>Home</a>
      </div>
      <div className='nav-menu-item'>
        <a href='#about-us'>About Us</a>
      </div>
      <div className='nav-menu-item'>
        <a href='#schedule'>Our Big Day</a>
      </div>
      <div className='nav-menu-item'>
        <a href='#rsvp'>RSVP</a>
      </div>
      <div className='nav-menu-item'>
        <a href='#faq'>FAQ</a>
      </div>
    </nav>
  );
};

export default Navbar;
