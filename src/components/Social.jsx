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
        <div className='social_icons left-10 bottom-4 items-center justify-center text-black-300 opacity-0 dark:text-white-300 lg:fixed lg:flex lg:flex-col'>
            <div className='flex items-center justify-center gap-[16px] lg:flex-col'>
                <a href='https://github.com/Femil32' target='_blank' rel='noopener noreferrer'>
                    <GithubIcon
                        width='20'
                        height='20'
                        className='transform fill-current transition-transform hover:-translate-y-1 hover:fill-[#C6C6C6]'
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
                        className='transform fill-current transition-transform hover:-translate-y-1 hover:fill-[#C6C6C6]'
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
                        className='transform fill-current transition-transform hover:-translate-y-1 hover:fill-[#C6C6C6]'
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
                        className='transform fill-current transition-transform hover:-translate-y-1 hover:fill-[#C6C6C6]'
                    />
                </a>
                <a href='https://codepen.io/Femil_32' target='_blank' rel='noopener noreferrer'>
                    <CodepenIcon
                        width='20'
                        height='20'
                        className='transform fill-current transition-transform hover:-translate-y-1 hover:fill-[#C6C6C6]'
                    />
                </a>
            </div>
            {/* <span className='h-24 w-1 bg-black-300 mt-6'></span> */}
            <span className='mt-4 h-16 w-1 bg-black-300'></span>
        </div>
    );
}

export default Social;
