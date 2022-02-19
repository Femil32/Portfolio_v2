import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import scrollreveal from "scrollreveal";

import Photo from "../assets/img/My_Photo.jpg";

gsap.registerPlugin(ScrollTrigger);
function About() {
    useEffect(() => {
        gsap.defaults({
            ease: "power2.in",
            duration: 1,
            opacity: 1,
        });

        gsap.fromTo(
            "#about .gold-line",
            {
                width: 0,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: "#about .gold-line",
                    start: "top 75%",
                },
                width: "100%",
            }
        );
        gsap.fromTo(
            "#about .about-grid",
            {
                opacity: 0,
                translateY: 20,
            },
            {
                scrollTrigger: {
                    trigger: "#about .gold-line",
                    start: "top 75%",
                },
                translateY: 0,
            }
        );
        return () => {};
    }, []);

    return (
        <div
            id='about'
            className='text-black-200 flex justify-center items-center min-h-screen py-[60px]'
        >
            <div className='flex justify-center items-start flex-col max-w-[1000px] w-full'>
                <div className='about_title relative flex flex-col md:flex-row justify-between items-center text-left w-full text-2xl mb-10 md:text-3xl md:mb-12'>
                    <div className='min-w-[150px] flex-1 md:min-w-[230px]'>
                        <span className='text-gold-300 relative'>01.</span>
                        <span> About Me</span>
                    </div>
                    <span className='gold-line border-t-8 border-gold-300 border-solid block w-full'></span>
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
