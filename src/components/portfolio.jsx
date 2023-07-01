import React from 'react';
import dynamic from '../assets/portfolio/dynamic.png';
import editor from '../assets/portfolio/editor.png';
import finance from '../assets/portfolio/finance.png';
import proxy from '../assets/portfolio/proxy.png';
import ocr from '../assets/portfolio/ocr.png';
import cache from '../assets/portfolio/cache.jpg';
import { Element } from 'react-scroll'; 
const Portfolio = () => {

    const portfolios = [
        {
            id: 2,
            src: finance,
            desc: "Ascend App",
            link: 'https://github.com/naturalcandy/ascend-api'
        },

        {
            id: 1,
            src: editor,
            desc: "C++ Command Line Text Editor",
            link: 'https://github.com/naturalcandy/CommandLineTxtEditor'
        },
        {
            id: 3,
            src: cache,
            desc: "Virtual Cache Implemenation",
            link: 'https://github.com/naturalcandy?tab=overview&from=2023-06-01&to=2023-06-29'
        },
        {
            id: 4,
            src: dynamic,
            desc: "Custom Dynamic Memory Allocator in C",
            link: 'https://github.com/naturalcandy?tab=overview&from=2023-06-01&to=2023-06-29'
        },
        {
            id: 5,
            src: ocr,
            desc: "Automated Photo OCR and Indexing for Image Search",
            link: 'https://github.com/naturalcandy/Img2txtpy'
        },
        {
            id: 6,
            src: proxy,
            desc: "Multithreaded Web Proxy",
            link: 'https://github.com/naturalcandy?tab=overview&from=2023-06-01&to=2023-06-29'
        },
        
    ]
    return (
        <Element name= "Portfolio"> 
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8"> 
                <p className="text-4xl inline border-b-4 border-gray-500">
                    Portfolio
                </p>
                <p className="py-6">
                    Here's some things I've been working on:
                </p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 px-12 gap-8 sm:px-0">
            {
                portfolios.map(({id,src, desc, link}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg relative group overflow-hidden">
                    <img src={src} alt='' className="rounded-md duration-200 transform hover:scale-105 w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-black opacity-0 group-hover:opacity-75 transition-opacity duration-200"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mb-4 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <p className="text-white text-xl">{desc}</p>
                    </div>
                        <button  onClick={() => window.open(link, '_blank')} 
                                 className="w-1/2 px-6 py-3 m-4 duration-200 scale-105 
                                 opacity-0 group-hover:opacity-100 ring-2 ring-blue-500
                                 rounded text-white bg-blue-500">Code</button>
                    </div>
                    </div>
                ))
            }
              </div>
            </div>
        </div>
        </Element>
    );
}

export default Portfolio;