'use client';
import './page.scss';
import Navbar from '@/components/navbar/Navbar';
import Section from '../components/Section/Section';
import Intro from '@/components/Intro/Intro';
import AboutUs from '@/components/AboutUs/AboutUs';
import Schedule from '@/components/Schedule/Schedule';
import RSVP from '@/components/RSVP/RSVP';
import FAQ from '@/components/FAQ/FAQ';

export default function Home() {
  return (
    <main className='main'>
      <Navbar />
      <Section sectionId='intro'>
        <Intro />
      </Section>
      <Section sectionId='about-us'>
        <AboutUs />
      </Section>
      <Section sectionId='schedule'>
        <Schedule />
      </Section>
      <Section sectionId='rsvp'>
        <RSVP />
      </Section>
      <Section sectionId='faq'>
        <FAQ />
      </Section>
    </main>
  );
}
