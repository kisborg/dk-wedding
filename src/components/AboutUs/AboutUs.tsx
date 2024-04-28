'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './AboutUs.scss';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

import TimelineElement from './timeline-element/TimelineElement';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faBabyCarriage,
  faBasketball,
  faBicycle,
  faBookOpen,
  faEarthOceania,
  faFaceKiss,
  faHeart,
  faMartiniGlass,
  faMedal,
  faMusic,
  faSwimmer,
  faTruckMoving,
} from '@fortawesome/free-solid-svg-icons';

import MainPic from '../../../public/images/about_us_main.png';

import KneeIcon from '../../../public/images/knee_icon.svg';
import RingIcon from '../../../public/images/ring_small.svg';
import Image from 'next/image';
import { useRef, useState } from 'react';
import {
  TCanvasConfettiInstance,
  TConductorInstance,
} from 'react-canvas-confetti/dist/types';

const AboutUs = () => {
  const t = useTranslations('AboutUs');
  const ref = useRef<HTMLDivElement>(null);
  const [hasPopped, setHasPopped] = useState(false);
  const controller = useRef<TConductorInstance>();

  const onInitHandler = ({
    conductor,
  }: {
    confetti: TCanvasConfettiInstance;
    conductor: TConductorInstance;
  }) => {
    controller.current = conductor;
  };

  const shootFireworks = () => {
    controller.current?.run({ speed: 2, duration: 3000 });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      Math.abs(
        (e.target as HTMLDivElement).scrollHeight -
          ((e.target as HTMLDivElement).scrollTop +
            (e.target as HTMLDivElement).clientHeight)
      ) <= 1;
    if (bottom && !hasPopped) {
      console.log('shoooooot');
      shootFireworks();
      setHasPopped(true);
    }
  };
  return (
    <div className='about-us' ref={ref} onScroll={handleScroll}>
      <div className='main-image-container'>
        <Image src={MainPic} alt='group photo' />
      </div>
      <div className='title-container'>
        <h1 className='title'>A mi kis történetünk...</h1>
      </div>
      <VerticalTimeline className='top-timeline-container'>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='1988'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faBaby} />}
        >
          <p>{t('1988D')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='1990'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faBabyCarriage} />}
        >
          <p>{t('1990K')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='1989 - 91'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faTruckMoving} />}
        >
          <p>{t('1990D')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='1997'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faMusic} />}
        >
          <p>{t('1997K')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2000 - 2005'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faMedal} />}
        >
          <p>{t('2000D')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2001'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faSwimmer} />}
        >
          <p>{t('2001K')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2002'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faBookOpen} />}
        >
          <p>{t('2002D')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2002 -2008'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faBasketball} />}
        >
          <p>{t('2002K')}</p>
        </TimelineElement>

        <TimelineElement
          className='vertical-timeline-element--work'
          date='2004'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faBookOpen} />}
        >
          <p>{t('2004K')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2006 - 2011'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faMartiniGlass} />}
        >
          <p>{t('2006D')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2009 - 2015'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faEarthOceania} />}
        >
          <p>{t('2009K')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2010'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<KneeIcon />}
        >
          <p>{t('2010D')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2018'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faBicycle} />}
        >
          <p>{t('2018K')}</p>
        </TimelineElement>
      </VerticalTimeline>
      {/* <div className='empty-container'>
        <h1 className='title'></h1>
      </div> */}
      <VerticalTimeline
        layout='1-column-left'
        className='bottom-timeline-container'
      >
        <TimelineElement
          className='vertical-timeline-element--work'
          date={t('DATE_2022_SEP')}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faHeart} />}
        >
          <p>{t('2022KD')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date={t('DATE_2022_OCT')}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faFaceKiss} />}
        >
          <p>{t('2022KDXXX')}</p>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date={t('DATE_2022_OCT')}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<RingIcon />}
        >
          <p>{t('2023KD')}</p>
        </TimelineElement>
      </VerticalTimeline>
      <Fireworks
        onInit={onInitHandler}
        decorateOptions={(options) => {
          options.particleCount = 150;
          options.colors = [
            '#1b1a6e',
            '#21417f',
            '#0b525b',
            '#2a1e4e',
            '#2653aa',
          ];
          return options;
        }}
      />
      ;
    </div>
  );
};

export default AboutUs;
