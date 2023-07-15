import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';
import nimg from '../assets/Logo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'My Blog',
      url: 'https://blogng.me/' // Replace with your blog site URL
    },
    {
      id: 4,
      link: 'Portfolio'
    },
    {
      id: 5,
      link: 'Experience'
    },
    {
      id: 6,
      link: 'Contact'
    },
  ];

  const closeMobileMenu = () => {
    setNav(false);
  };

  return (
    <div className="flex z-10 justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <img src={nimg} alt="html" className="w-20 mx-auto" />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, url }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            ) : (
              <Link
                to={link}
                smooth
                duration={500}
                onClick={closeMobileMenu} // Close mobile menu on link click
              >
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer hover:scale-105 duration-200 pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((x) => (
            <li key={x.id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {x.url ? (
                <a href={x.url} target="_blank" rel="noopener noreferrer">
                  {x.link}
                </a>
              ) : (
                <Link
                  onClick={closeMobileMenu} // Close mobile menu on link click
                  to={x.link}
                  smooth
                  duration={500}
                >
                  {x.link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar; 