import React from 'react';
import { Link } from "react-scroll";
import { BsArrowRightCircle } from 'react-icons/bs';
const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
            <div className="max-w-screen-lg mxauto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white"> Hi, I'm Noli.</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am a junior undergrad Computer Science major enrolled within the 
                        School Of Computer Science at Carnegie Mellon University. 
                        (add more later).
                    </p>

                    <div>
                        <Link to = "portfolio"
                          smooth 
                          duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio 
                            <span className="px-1 group-hover:rotate-90 duration-300">
                                <BsArrowRightCircle size = {18 } className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;