import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                GitHub <FaGithub size = {30} />  
                </> 
            ),
            href: "https://github.com/naturalcandy",
        },
        {
            id: 2,
            child: (
                <>
                Mail <HiOutlineMail size = {30} />  
                </> 
            ),
            href: "mailto:nolawigerawork@gmail.com",
        }
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(x => (
                <li key = {x.id} className={"flex justify-between items-center w-40 h-14 px-4 hover:rounded-md ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 " +
                    " " + x.style}>
                <a href={x.href} className="flex justify-between items-center w-full text-white" 
                   download={x.download}
                   target='_blank'
                   rel='noreferrer'> 
                 {x.child}
                </a>
                </li>

                ))}
                
            </ul>
        </div>
    )
}

export default SocialLinks;