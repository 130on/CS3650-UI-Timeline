import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

import Skeuomorphism from './Skeuomorphism';
import FlatDesign from './FlatDesign';
import DarkMode from './DarkMode';
import Neuomorphism from './Neuomorphism';

import useBootstrapTheme from '../../utils/userBootstrapTheme';

const sections = [
  { id: 'skeuomorphism', theme: 'skeuomorphism', component: Skeuomorphism },
  { id: 'flat-design', theme: 'flatly', component: FlatDesign  },
  { id: 'darkmode', theme: 'darkly', component: DarkMode }, 
  { id: 'neuomorphism', theme: 'morph', component: Neuomorphism },
];

const ScrollContainer = () => {
  const [currentTheme, setCurrentTheme] = useState('skeuomorphism');
  useBootstrapTheme(currentTheme);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.25;
    const windowHeight = window.innerHeight;

    const activeSection = sections.find((_, index) => {
      const sectionStart = index * windowHeight;
      const sectionEnd = sectionStart + windowHeight;
      return scrollPosition >= sectionStart && scrollPosition < sectionEnd;
    });

    if (activeSection) {
      setCurrentTheme(activeSection.theme);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          style={{ height: '100vh', padding: '2rem' }}
          
          
        >
          <Header/>
          <Navbar/>
          <h1>{section.id} Design</h1>
          <p>Content for {section.id}</p>
          
          <section.component/>
          
          <Footer/>
        </section>
      ))}
    </div>
  );
};

export default ScrollContainer;
