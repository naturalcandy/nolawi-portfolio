import React from 'react';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import python from '../assets/pythonimg.png';
import csharp from '../assets/csharp.png';
import azuredevops from '../assets/azuredevops.png';
import nodeImg from '../assets/nodejsimg.png';
import cimg from '../assets/cimg.png';
import cpp from '../assets/cpp.png';
import angularimg from '../assets/Angularimg.svg.png';
import msql from '../assets/msqll.png';
import typescript from '../assets/typescript.png';
import htmlcss from '../assets/htmlcss.png';
import java from '../assets/java.webp';
import { Element } from 'react-scroll';

const Experience = () => {
    const experienceLists = [
        {
            id : 1,
            src : python,
            title : 'Python',
            style : 'shadow-yellow-500'
        },
        {
            id : 2,
            src : csharp,
            title : 'C#',
            style : 'shadow-purple-500'
        },
        {
            id : 3,
            src : cimg,
            title : 'C',
            style : 'shadow-indigo-500'
        },
        {
            id : 4,
            src : cpp,
            title : 'C++',
            style : 'shadow-blue-500'
        },
        {
            id : 5,
            src : angularimg,
            title : 'Angular',
            style : 'shadow-red-500'
        },
        {
            id : 6,
            src : typescript,
            title : 'TypeScript',
            style : 'shadow-blue-500'
        },
        {
            id : 7,
            src : msql,
            title : 'Microsoft SQL Server/MySQL',
            style : 'shadow-red-500'
        },
        {
            id : 8,
            src : htmlcss,
            title : 'HTML & CSS',
            style : 'shadow-orange-500'
        },
        {
            id : 9,
            src : java,
            title : 'Java',
            style : 'shadow-blue-500'
        },
        {
            id : 10,
            src : javascript,
            title : 'Javascript',
            style : 'shadow-yellow-500'
        },
        {
            id : 11,
            src : reactImage,
            title : 'React',
            style : 'shadow-blue-600'
        },
        {
            id : 12,
            src : tailwind,
            title : 'Tailwind',
            style : 'shadow-sky-500'
        },
        {
            id : 13,
            src : nodeImg,
            title : 'Node.js',
            style : 'shadow-green-500'
        },
        {
            id : 14,
            src : azuredevops,
            title : 'AzureDevOps',
            style : 'shadow-white'
        },
        {
            id : 15,
            src : github,
            title : 'Github',
            style : 'shadow-gray-400'
        }
    ]
    return (
        <Element name = "Experience">
        <div name = 'experience' className= "bg-gradient-to-b  from-gray-800 to-black w-full h-auto sm:h-[900px]">
        <div className = "max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div> 
            <p className = "text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
            <p className = "py-6">These are the technologies I have worked with</p>
        </div> 
        <div className = "w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

        {experienceLists.map(({id, src, title, style}) => (
            <div key = {id}  className = {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="html" className = "w-20 mx-auto" />
                <p className = "mt-4">{title}</p>
            </div> 
        ))}  
        </div>
        </div>
        </div>
        </Element>
    )
}


export default Experience;

