import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import contentArchitecture from '../../utils/content-architecture.json';
import './content-architecture.css';

const Content_architecture = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-card');
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition >= sectionTop - windowHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="content-wrapper">
      <div className="paddings innerWidth content-container">
        {/* <h1 className="primaryText" style={{ fontSize: "2.2rem" }}>{contentArchitecture.title}</h1> */}
        {contentArchitecture.sections.map((section, index) => (
          <div key={index} className={`section-card ${activeSection === index ? 'active' : ''}`}>
            <Link to={section.id} smooth={true} duration={1000} className="scroll-link">
              <h2 className="primaryText" style={{ fontSize: "2.1rem" }}>{section.title}</h2>
            </Link>
            
            {/* First */}
            <div id={section.id} className="section-content">
              <div className={`content-first ${activeSection === index ? 'fade-in' : ''}`} style={{ textAlign: 'justify' }}>
                {section['content-first']}
              </div>
              
              {/*Second*/}
              {section['image-first'] && (
                <img
                  src={section['image-first']}
                  alt={section.title}
                  className={`section-image ${activeSection === index ? 'fade-in' : ''}`}
                />
              )}
              {/* <div className={`content-second ${activeSection === index ? 'fade-in' : ''} justify-content` }>
                {section['content-second']}
              </div> */}

              {section['content-second'] && (
                <div className={`content-second ${activeSection === index ? 'fade-in' : ''} justify-content`}>
                  <span className="orangeText">{section['content-second'].split(' ')[0]}</span>
                  {section['content-second'].slice(section['content-second'].indexOf(' '))}
                </div>
              )}
              <p className='justify-content'>{section['content-second-ptII']}</p>

                {/*Third*/}
              {section['image-second'] && (
                <img
                  src={section['image-second']}
                  alt={section.title}
                  className={`section-image ${activeSection === index ? 'fade-in' : ''}`}
                />
              )}

              {section['content-third'] && (
                <div className={`content-third ${activeSection === index ? 'fade-in' : ''} justify-content`}>
                  <span className="orangeText">{section['content-third'].split(' ')[0]}</span>
                  {section['content-third'].slice(section['content-third'].indexOf(' '))}
                </div>
              )}
              <p className='justify-content'>{section['content-third-ptII']}</p>


                {/*Fourth*/}
              {section['image-third'] && (
                <img
                  src={section['image-third']}
                  alt={section.title}
                  className={`section-image ${activeSection === index ? 'fade-in' : ''}`}
                />
              )}

              {section['content-fourth'] && (
                <div className={`content-fourth ${activeSection === index ? 'fade-in' : ''} justify-content`}>
                  <span className="orangeText">{section['content-fourth'].split(' ')[0]}</span>
                  {section['content-fourth'].slice(section['content-fourth'].indexOf(' '))}
                </div>
              )}
              <p className='justify-content'>{section['content-fourth-ptII']}</p>



                {/*Fifth*/}
              {section['image-fourth'] && (
                <img
                  src={section['image-fourth']}
                  alt={section.title}
                  className={`section-image ${activeSection === index ? 'fade-in' : ''}`}
                />
              )}
              {section['content-fifth'] && (
                <div className={`content-fifth ${activeSection === index ? 'fade-in' : ''} justify-content`}>
                  <span className="orangeText">{section['content-fifth'].split(' ')[0]}</span>
                  {section['content-fifth'].slice(section['content-fifth'].indexOf(' '))}
                </div>
              )}
              <p className='justify-content'>{section['content-fifth-ptII']}</p>



                {/*Sixth*/}
              {section['image-fifth'] && (
                <img
                  src={section['image-fifth']}
                  alt={section.title}
                  className={`section-image ${activeSection === index ? 'fade-in' : ''}`}
                />
              )}
              {section['content-sixth'] && (
                <div className={`content-sixth ${activeSection === index ? 'fade-in' : ''} justify-content`}>
                  <span className="orangeText">{section['content-sixth'].split(' ')[0]}</span>
                  {section['content-sixth'].slice(section['content-sixth'].indexOf(' '))}
                </div>
              )}
              <p className='justify-content'>{section['content-sixth-ptII']}</p>


              {/*Seventh*/}
              {section['image-sixth'] && (
                <img
                  src={section['image-sixth']}
                  alt={section.title}
                  className={`section-image ${activeSection === index ? 'fade-in' : ''}`}
                />
              )}
              
              {section['content-seventh'] && (
                <div className={`content-seventh ${activeSection === index ? 'fade-in' : ''} justify-content`}>
                  <span className="orangeText">{section['content-seventh'].split(' ')[0]}</span>
                  {section['content-seventh'].slice(section['content-seventh'].indexOf(' '))}
                </div>
              )}

              <p className='justify-content'>{section['content-seventh-ptII']}</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content_architecture;