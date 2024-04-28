'use client';
import { useEffect, useRef, useState } from 'react';
import type { MotionProps, Variants } from 'framer-motion';
import { Menu, MenuItem } from './LanguageItem';
import './LanguageSwitcher.scss';
import { usePathname, useRouter } from 'next/navigation';

const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
} satisfies Variants;

const item = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
} satisfies MotionProps;

export default function LanguageSwitcher({ isSmall }: { isSmall: boolean }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [language, setLanguage] = useState(
    pathname === '/en' ? 'English' : 'Magyar'
  );
  const switchLanguage = (lang: string) => {
    if (isSmall) {
      setLanguage(lang === 'English' ? 'EN' : 'HU');
    }
    setLanguage(lang);
    const localization = lang === 'English' ? '/en' : '/hu';
    router.replace(localization);
  };

  useEffect(() => {
    if (isSmall) {
      setLanguage(pathname === '/en' ? 'EN' : 'HU');
    } else {
      setLanguage(pathname === '/en' ? 'English' : 'Magyar');
    }
  }, [isSmall, pathname]);

  return (
    <Menu
      label={language}
      open={open}
      setOpen={setOpen}
      animate={open ? 'open' : 'closed'}
      initial='closed'
      exit='closed'
      variants={menu}
    >
      <MenuItem onClick={() => switchLanguage('English')} {...item}>
        English
      </MenuItem>
      <MenuItem onClick={() => switchLanguage('Magyar')} {...item}>
        Magyar
      </MenuItem>
    </Menu>
  );
}
