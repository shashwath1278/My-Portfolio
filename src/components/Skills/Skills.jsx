import React from 'react';
import './Skills.css';
import {  FaHtml5, FaCss3Alt, FaJs, FaJava, FaCogs, FaPython, FaCuttlefish, FaReact, FaDocker, FaGithub, FaTerminal } from 'react-icons/fa'; // Import icons from react-icons
import { useTheme } from '../Themecontext'; 
import { BsBootstrap } from 'react-icons/bs'; 
import { SiTailwindcss,SiFirebase, SiTypescript, SiFigma } from 'react-icons/si';
import useEmblaCarousel from 'embla-carousel-react';
import cpp from "../../assets/cpp.png";
import kaliImage from "../../assets/kali.png"; 

const Skills = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });
  const { theme } = useTheme(); // Correctly using the hook inside the component

  return (
    <section id="skills" className="sk">
      <div className={`skills-images ${theme === 'dark' ? 'dark' : ''}`}>
        <h1><b>Skills</b></h1>

        <div className="sec1">
          <h2>Programming languages:</h2>
          <div className="carousel" ref={emblaRef}>
            <div className="carousel__container">
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaHtml5 size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaCss3Alt size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaJs size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaJava size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaPython size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaCuttlefish size={65} /></div>
              </div>
              <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}>
                  <img src={cpp} alt="C++" width={65} height={65} className={theme === 'dark' ? 'dark-icon' : ''} />
                </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><SiTypescript size={65} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec2">
          <h2><b>Some libraries and frameworks used by me:</b></h2>
          <div className="carousel" ref={emblaRef}>
            <div className="carousel__container">
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaReact size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><SiTailwindcss  size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}>< BsBootstrap size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}>< SiFirebase size={65} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec3">
          <h2><b>Tools used by me:</b></h2>
          <div className="carousel" ref={emblaRef}>
            <div className="carousel__container">
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaDocker size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaGithub size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><FaTerminal size={65} /></div>
              </div>
              <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}>
                  <img src={kaliImage} alt="Kali Linux" width={65} height={65} className={theme === 'dark' ? 'dark-icon' : ''} />
                </div>
               
              </div> <div className="carousel__item">
                <div className={`icon-card ${theme === 'dark' ? 'dark' : ''}`}><SiFigma size={65} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
