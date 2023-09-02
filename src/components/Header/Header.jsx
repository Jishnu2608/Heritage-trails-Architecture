import React, {useState,useEffect} from 'react';
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 992) {
      return { right: !menuOpened ? '-100%' : '0' };
    }
  };

  const observeHeroSection = () => {
    const heroSection = document.getElementById('hero-section');

    let thresholdValue = 0.4; 

    if (document.documentElement.clientWidth <= 768) {

      thresholdValue = 0.2; 
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickyHeader(!entry.isIntersecting);
      },
      { threshold: thresholdValue } 
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  };

  useEffect(() => {
    observeHeroSection();
  }, []);

  useEffect(() => {
    
    window.addEventListener('scroll', observeHeroSection);

    return () => {
      window.removeEventListener('scroll', observeHeroSection);
    };
  }, []);
  return (
      <section className={`h-wrapper ${stickyHeader ? 'sticky-header' : ''}`}>
          <div className="flexCenter paddings innerWidth h-container">
          <a href="/">
          <img style={{cursor:"pointer"}} src="./logo.png" alt="logo" width={250}/>
          </a>
          
          <OutsideClickHandler
          onOutsideClick={() =>{
              setMenuOpened(false)
          }}>
          <div className={`flexCenter h-menu ${menuOpened ? 'menu-opened' : ''}`}
          style={getMenuStyles(menuOpened)}
          >
              <Link to="arunachal" smooth={true} duration={500}>
              Arunachal
              </Link>
              <Link to="assam" smooth={true} duration={500}>
              Assam
              </Link>
              <Link to="meghalaya" smooth={true} duration={500}>
              Meghalaya
              </Link>
              <Link to="nagaland" smooth={true} duration={500}>
              Nagaland
              </Link>
              <Link to="manipur" smooth={true} duration={500}>
              Manipur
              </Link>
              <Link to="mizoram" smooth={true} duration={500}>
              Mizoram
              </Link>
              <Link to="tripura" smooth={true} duration={500}>
              Tripura
              </Link>
              <Link to="sikkim" smooth={true} duration={500}>
              Sikkim
              </Link>
              
          </div>
          </OutsideClickHandler> 
          <div className="menu-icon" onClick= {() => setMenuOpened((prev)=>!prev)}>
              <BiMenuAltRight size={30}/>
              </div>
          </div>  
      </section>
  );
};

export default Header