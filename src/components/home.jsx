import React from 'react';
import { Link } from "react-scroll";
import { BsArrowRightCircle } from 'react-icons/bs';
import { Element } from 'react-scroll';
const Home = () => {
    return (
        <Element name="Home">
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-start justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white mb-4">Hi, I'm Noli.</h2>
                <h3 className="font-bold text-white">Glad you could stop by.</h3>
                <p className="text-gray-500 py-4 max-w-md">
                As an ambitious 3rd-year Computer Science major at Carnegie Mellon, I'm driven to become a skilled software engineer,
                embracing challenges with unwavering enthusiasm. I find immense fulfillment in embracing intricate challenges,
                devising inventive solutions, and harnessing the power of collaborative environments.
                </p>
                <div>
                <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                    Portfolio
                    <span className="px-1 group-hover:rotate-90 duration-300">
                    <BsArrowRightCircle size={18} className="ml-1" />
                    </span>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </Element>
    );
};

export default Home;