import React from "react";

import Photo from "../assets/img/My_Photo.jpg";

function About() {
    return (
        <div
            id='about'
            className='text-black-200 flex justify-center items-center min-h-screen py-[60px]'
        >
            <div className='flex justify-center items-start flex-col max-w-[1000px] w-full'>
                <div className='relative text-left w-full text-2xl mb-10 md:text-3xl md:mb-8'>
                    <h1 className="flex flex-col md:flex-row before:content-none md:before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[50%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2 md:before:w-[75%]">
                        <span className="text-gold-300 relative before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[85%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2 md:before:w-[75%] md:before:content-none">
                            01.
                        </span>
                        <span> About Me</span>
                    </h1>
                </div>
                <div className='about-grid'>
                    <div className='content'>
                        <p className='mb-6'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
                            asperiores necessitatibus veniam tenetur earum nihil quam, quis labore?
                            Corrupti impedit harum accusantium! Blanditiis nostrum vero velit maxime
                            numquam harum omnis molestiae quas doloremque tempore?
                        </p>
                        <p className='mb-6'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
                            asperiores necessitatibus veniam tenetur earum nihil quam, quis labore?
                            Corrupti impedit harum accusantium! Blanditiis nostrum Corrupti impedit
                            harum accusantium! Blanditiis nostrum
                        </p>
                        <p className='mb-6'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
                            asperiores necessitatibus veniam tenetur earum nihil quam.
                        </p>
                        <p className='mb-6'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
                            asperiores necessitatibus veniam tenetur earum nihil quam.
                        </p>
                        <ul className='about-skill-grid'>
                            <li className='relative pl-6 golden-line before:w-2 before:left-0 '>
                                JavaScript (ES6+)
                            </li>
                            <li className='relative pl-6 golden-line before:w-2 before:left-0 '>
                                TypeScript
                            </li>
                            <li className='relative pl-6 golden-line before:w-2 before:left-0 '>
                                React
                            </li>
                            <li className='relative pl-6 golden-line before:w-2 before:left-0 '>
                                Eleventy
                            </li>
                            <li className='relative pl-6 golden-line before:w-2 before:left-0 '>
                                Node.js
                            </li>
                            <li className='relative pl-6 golden-line before:w-2 before:left-0 '>
                                WordPress
                            </li>
                        </ul>
                    </div>
                    <div className='myPhoto w-[300px] h-[385px] relative z-10 mx-auto'>
                        <img src={Photo} alt='' className='w-full h-full rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
