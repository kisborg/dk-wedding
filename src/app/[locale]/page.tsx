'use client';
import './page.scss';
import Navbar from '@/components/navbar/Navbar';
import Section from '../../components/Section/Section';
import Intro from '@/components/Intro/Intro';
import AboutUs from '@/components/AboutUs/AboutUs';
import Schedule from '@/components/Schedule/Schedule';
import RSVP from '@/components/RSVP/RSVP';
import FAQ from '@/components/Venue/Venue';
import { useContext, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { RouteContext } from '../contexts/RouteContextProvider';
export type Page = 'intro' | 'about-us' | 'schedule' | 'rsvp' | 'venue';

export default function Home() {
  const { route, setRoute } = useContext(RouteContext);
  const transition = useTransition(route, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 600, friction: 120 },
  });
  return (
    <main className='main'>
      <p className='attribution'>
        Image by{' '}
        <a href='https://www.freepik.com/free-vector/green-watercolor-leaves-background_13295055.htm'>
          Freepik
        </a>
      </p>
      <div className='content-container'>
        <Navbar onNavigation={setRoute!} />
        <div id='page-container'>
          {transition((style, page) => {
            switch (page) {
              case 'intro':
                return (
                  <animated.div className={'page'} style={style}>
                    <Section sectionId='intro'>
                      <Intro />
                    </Section>
                  </animated.div>
                );
              case 'about-us':
                return (
                  <animated.div className={'page'} style={style}>
                    <Section sectionId='about-us'>
                      <AboutUs />
                    </Section>
                  </animated.div>
                );
              case 'schedule':
                return (
                  <animated.div className={'page'} style={style}>
                    <Section sectionId='schedule'>
                      <Schedule />
                    </Section>
                  </animated.div>
                );
              case 'rsvp':
                return (
                  <animated.div className={'page'} style={style}>
                    <Section sectionId='rsvp'>
                      <RSVP />
                    </Section>
                  </animated.div>
                );
              case 'venue':
                return (
                  <animated.div className={'page'} style={style}>
                    <Section sectionId='venue'>
                      <FAQ />
                    </Section>
                  </animated.div>
                );
              default:
                return (
                  <animated.div className={'page'} style={style}>
                    <Section sectionId='intro'>
                      <Intro />
                    </Section>
                  </animated.div>
                );
            }
          })}
        </div>
      </div>
    </main>
  );
}
