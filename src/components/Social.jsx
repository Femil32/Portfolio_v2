import React from "react";
import { Link } from "react-router-dom";
import {
    CodepenIcon,
    GithubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from "../helper/AllSvgs";

function Social() {
    return (
        <div className='fixed flex justify-center items-center flex-col left-10 bottom-4 text-black-300'>
            <div className='flex flex-col justify-center items-center gap-[16px]'>
                <a href='https://github.com/Femil32' target='_blank' rel='noopener noreferrer'>
                    <GithubIcon
                        width='20'
                        height='20'
                        className='fill-current transform transition-transform hover:fill-[#C6C6C6] hover:-translate-y-1'
                    />
                </a>
                <a
                    href='https://www.instagram.com/femil_32/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <InstagramIcon
                        width='20'
                        height='20'
                        className='fill-current transform transition-transform hover:fill-[#C6C6C6] hover:-translate-y-1'
                    />
                </a>
                <a
                    href='https://twitter.com/femil_savaliya'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <TwitterIcon
                        width='20'
                        height='20'
                        className='fill-current transform transition-transform hover:fill-[#C6C6C6] hover:-translate-y-1'
                    />
                </a>
                <a
                    href='https://www.linkedin.com/in/femil-savaliya/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <LinkedInIcon
                        width='20'
                        height='20'
                        className='fill-current transform transition-transform hover:fill-[#C6C6C6] hover:-translate-y-1'
                    />
                </a>
                <a href='https://codepen.io/Femil_32' target='_blank' rel='noopener noreferrer'>
                    <CodepenIcon
                        width='20'
                        height='20'
                        className='fill-current transform transition-transform hover:fill-[#C6C6C6] hover:-translate-y-1'
                    />
                </a>
            </div>
            {/* <span className='h-24 w-1 bg-black-300 mt-6'></span> */}
            <span className='h-16 w-1 bg-black-300 mt-4'></span>
        </div>
    );
}

export default Social;
