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
import BabyBoy from '../../../public/images/dani_baba.png';
import BabyGirl from '../../../public/images/kriszti_baba.png';
import KneeIcon from '../../../public/images/knee_icon.svg';
import KneeGif from '../../../public/images/knee.gif';
import RingIcon from '../../../public/images/ring_small.svg';
import TravellingImage from '../../../public/images/travelling.png';
import VikingBoatImage from '../../../public/images/viking_boat.png';
import KayakImage from '../../../public/images/kayak.png';
import SwimmingImage from '../../../public/images/swimming.png';
import FlagsImage from '../../../public/images/flags.png';
import CocktailImage from '../../../public/images/cocktail.gif';
import WorldTraveler from '../../../public/images/world_traveler.png';
import TriathlonImage from '../../../public/images/triathlon.png';
import Goldblum from '../../../public/images/excite.gif';
import TheOffice from '../../../public/images/celebrate.gif';
import BasketballImage from '../../../public/images/baskteball.png';
import SheSaidYes from '../../../public/images/shesaidyes.png';
import School from '../../../public/images/school.png';

import Image from 'next/image';
import { useRef, useState } from 'react';
import {
  TCanvasConfettiInstance,
  TConductorInstance,
} from 'react-canvas-confetti/dist/types';

import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'] });

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
        <h1 className='title'>{t('TITLE')}</h1>
      </div>
      <VerticalTimeline
        className={`top-timeline-container ${quicksand.className}`}
      >
        <TimelineElement
          className='vertical-timeline-element--work'
          date='1988'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faBaby} />}
        >
          <div className='story-container baby-photo'>
            <p>{t('1988D')}</p>
            <div className='image-container'>
              <Image
                src={BabyBoy}
                className='baby-image'
                alt='baby'
                width={70}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='1990'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faBabyCarriage} />}
        >
          <div className='story-container baby-photo'>
            <p>{t('1990K')}</p>
            <div className='image-container'>
              <Image
                src={BabyGirl}
                className='baby-image'
                alt='baby'
                width={70}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='1990 - 91'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faTruckMoving} />}
        >
          <div className='story-container'>
            <p>{t('1990D')}</p>
            <div className='image-container'>
              <Image
                src={TravellingImage}
                className='travel-image'
                alt='travelling'
                width={70}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='1997'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faMusic} />}
        >
          <div className='story-container'>
            <p>{t('1997K')}</p>
            <div className='image-container'>
              <Image
                src={VikingBoatImage}
                className='viking-image'
                alt='travelling'
                width={70}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2000 - 2005'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faMedal} />}
        >
          <div className='story-container kayak-story'>
            <p>{t('2000D')}</p>
            <div className='image-container'>
              <Image
                src={KayakImage}
                className='kayak-image'
                alt='kayak'
                width={150}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2001'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faSwimmer} />}
        >
          <div className='story-container'>
            <p>{t('2001K')}</p>
            <div className='image-container'>
              <Image
                src={SwimmingImage}
                className='swim-image'
                alt='swimming'
                width={100}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2002'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faBookOpen} />}
        >
          <div className='story-container'>
            <p>{t('2002D')}</p>
            <div className='image-container'>
              <Image
                src={School}
                className='school-image'
                alt='school'
                width={70}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2002 -2008'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faBasketball} />}
        >
          <div className='story-container'>
            <p>{t('2002K')}</p>
            <div className='image-container'>
              <Image
                src={BasketballImage}
                className='basketball-image'
                alt='basketball'
                width={70}
              />
            </div>
          </div>
        </TimelineElement>

        <TimelineElement
          className='vertical-timeline-element--work'
          date='2004'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faBookOpen} />}
        >
          <div className='story-container'>
            <p>{t('2004K')}</p>
            <div className='image-container'>
              <Image
                src={FlagsImage}
                className='school-image'
                alt='school'
                width={100}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2006 - 2011'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon icon={faMartiniGlass} />}
        >
          <div className='story-container cocktail'>
            <p>{t('2006D')}</p>
            <div className='image-container'>
              <Image
                src={CocktailImage}
                className='cocktail-image'
                alt='cocktail'
                width={100}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2009 - 2015'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faEarthOceania} />}
        >
          <div className='story-container'>
            <p>{t('2009K')}</p>
            <div className='image-container'>
              <Image
                src={WorldTraveler}
                className='worldtraveler-image'
                alt='travel'
                width={100}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2010'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<KneeIcon />}
        >
          <div className='story-container'>
            <p>{t('2010D')}</p>
            <div className='image-container'>
              <Image
                src={KneeGif}
                className='knee-image'
                alt='knee hurts'
                width={100}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date='2018'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon icon={faBicycle} />}
        >
          <div className='story-container'>
            <p>{t('2018K')}</p>
            <div className='image-container'>
              <Image
                src={TriathlonImage}
                className='triathlon-image'
                alt='triathlon'
                width={100}
              />
            </div>
          </div>
        </TimelineElement>
      </VerticalTimeline>
      <VerticalTimeline
        layout='1-column-left'
        className={`bottom-timeline-container ${quicksand.className}`}
      >
        <TimelineElement
          className='vertical-timeline-element--work'
          date={t('DATE_2022_SEP')}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faHeart} />}
        >
          <div className='story-container'>
            <p>{t('2022KD')}</p>
            <div className='image-container'>
              <Image
                src={Goldblum}
                className='goldblum-image'
                alt='goldblum'
                width={150}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date={t('DATE_2022_OCT')}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faFaceKiss} />}
        >
          <div className='story-container firstkiss'>
            <p>{t('2022KDXXX')}</p>
            <div className='image-container'>
              <Image
                src={TheOffice}
                className='firstkiss-image'
                alt='the office celebration'
                width={250}
              />
            </div>
          </div>
        </TimelineElement>
        <TimelineElement
          className='vertical-timeline-element--work'
          date={t('DATE_2023_OCT')}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<RingIcon />}
        >
          <div className='story-container shesaidyes'>
            <p>
              {t.rich('2023KD', {
                bold: (chunks) => <b>{chunks}</b>,
              })}
            </p>
            <div className='image-container'>
              <Image
                src={SheSaidYes}
                className='shesaidyes-image'
                alt='she said yes'
                width={350}
              />
            </div>
          </div>
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
