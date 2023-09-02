import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section" className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Architecture
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">
                        "Architecture is the embodiment of culture, a testament to human ingenuity that shapes the 
                        world we inhabit, combining form and function into harmonious symphonies of space."</span>
                       <span className="secondaryText"><i>~ Frank Lloyd Wright</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-art-craft-hero-img.jpeg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero