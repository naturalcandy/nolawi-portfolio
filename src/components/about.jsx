import React from 'react';
import { Element } from 'react-scroll';


const About = () => {
    return (
      <Element name="About">
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <h3 className="text-2xl font-bold mb-6">Feel free to take a tour and see what catches your eye</h3>
            <p className="text-center">
              Hello there! I'm Noli, a junior in the School of Computer Science at CMU with a Concentration in Computer Systems. 
              I'm passionate about understanding complex problems and developing impactful solutions through collaboration.
              My passion for the field is exemplified through my extensive list of personal projects and contributions 
              as a research intern at CMU's Robotics Institute. I am grateful for the opportunity to learn from brilliant minds 
              in the field and continually push the boundaries of what's possible. In addition to my passion for software engineering, 
              I'm also interested in finance and enjoy exploring systems programming. If you'd like to chat further, feel free to reach out anytime!
            </p>
          </div>
        </div>
      </Element>
    );
  };
  
  export default About;