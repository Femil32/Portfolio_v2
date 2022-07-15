import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import scrollreveal from "scrollreveal";

import Photo from "../assets/img/myphoto.jpg";
import { PageLable } from "../components/micro";

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
            className='flex min-h-screen items-center justify-center pt-[65px] pb-[40px] text-black-200 dark:text-white-200 sm:pt-[65px]'
        >
            <div className='flex w-full max-w-[1000px] flex-col items-start justify-center'>
                <PageLable
                    className={'about_title'}
                    pageNo={'01'}
                    title={'About Me'}
                />
                <div className='about-grid w-full'>
                    <div className='content w-full max-w-[550px] text-sm sm:text-base mdMax:max-w-full'>
                        <p className='mb-6 leading-6'>
                            Hello! My name is Femil and I'm Student. I enjoy creating things that
                            live on the internet. My interest in web development started back in
                            2019 when I showed my senior friend to build a website — after creating
                            some projects that taught me a lot about HTML & CSS!
                        </p>
                        <p className='mb-6 leading-6'>
                            Fast-forward to today, and I’ve had the privilege of working at a <br />
                            <a
                                href='https://www.micrasolution.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {" "}
                                software development company
                            </a>{" "}
                            and a{" "}
                            <a
                                href='https://www.mycaptain.in/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {" "}
                                online platform
                            </a>{" "}
                            . My main focus these days is to be a master in Full-Stack development &
                            learn UI/UX design.
                        </p>
                        <p className='mb-6 leading-6'>
                            I love to share my knowledge and discuss Tech. stuff with my friends and
                            colleagues, so I write blogs at{" "}
                            <a
                                href='https://dev.to/femil'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {" "}
                                dev.to
                            </a>{" "}
                        </p>
                        <p className='mb-6'>
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className='about-skill-grid'>
                            <li className='golden-line relative pl-6 before:left-0 before:w-2 '>
                                JavaScript (ES6+)
                            </li>
                            <li className='golden-line relative pl-6 before:left-0 before:w-2 '>
                                TypeScript
                            </li>
                            <li className='golden-line relative pl-6 before:left-0 before:w-2 '>
                                React
                            </li>
                            <li className='golden-line relative pl-6 before:left-0 before:w-2 '>
                                Eleventy
                            </li>
                            <li className='golden-line relative pl-6 before:left-0 before:w-2 '>
                                Node.js
                            </li>
                            <li className='golden-line relative pl-6 before:left-0 before:w-2  '>
                                WordPress
                            </li>
                        </ul>
                    </div>
                    <div className='myPhoto relative z-10 mx-auto w-[220px] md:h-[420px] md:w-[320px]'>
                        <img src={Photo} alt='' className='h-full w-full rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
