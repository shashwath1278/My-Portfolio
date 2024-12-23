import React, { useEffect } from 'react';
import Background from './components/background/Background';
import Background1 from './components/background/Background1';
import Navbar from './components/navbar/Navbar';
import { useTheme } from './components/ThemeContext';
import Body from './components/Aboutme/Body';
import Aboutme from './components/Aboutme/AboutMe';
import Type from './components/Typewritertext/Typetext';
import Skills from './components/Skills/Skills';
import Contactme from './components/Contactme/Contactme';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

const App = () => {
  const { theme } = useTheme(); // Correctly using the hook inside the component

  useEffect(() => {
    // This will add or remove the dark theme class from the body element
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="relative bg-transparent">
      {theme === 'dark' ? <Background /> : <Background1 />}
      <Navbar />
      <Body/>
      <Type/>
      <Aboutme/>
      <Skills/>
      <Contactme/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default App;
