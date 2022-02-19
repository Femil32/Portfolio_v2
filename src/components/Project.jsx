import anime from "animejs";
import gsap from "gsap/all";
import React, { useEffect } from "react";

import Temp1 from "../assets/img/temp1.png";
import { GithubIcon, ShareIcon } from "../helper/AllSvgs";

function Project({ ProjectsData }) {
    useEffect(() => {
        let myArray =
            ProjectsData.length > 0 && Array.from(document.querySelectorAll("#projects .project"));
        myArray.forEach(el => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                    onEnter: function () {
                        anime({
                            targets: el,
                            easing: "easeInOutQuad",
                            delay: anime.stagger(100),
                            opacity: [0, 1],
                            duration: 1200,
                            translateY: [20, 0],
                        });
                    },
                },
            });
        });

        return () => {};
    }, []);
    return (
        <>
            {ProjectsData.length > 0 &&
                ProjectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className='project flex flex-col-reverse md:grid grid-cols-12 grid-rows-1 relative md:gap-[10px] items-center w-full z-[99] mb-16 md:mb-32 overflow-hidden opacity-0'
                    >
                        <div
                            className={`${
                                project.id % 2 === 0
                                    ? "project-content-odd"
                                    : "project-content-even"
                            } w-full h-auto z-[99] mt-6 md:mt-0`}
                        >
                            <div className='mb-2 md:mb-4'>
                                <p className='text-xs md:mb-2'>Featured Project</p>
                                <a
                                    href='https://femil-tesla-clone-323232.web.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-xl md:text-3xl capitalize tracking-wide'
                                >
                                    {project.name}
                                </a>
                            </div>
                            <div className='bg-black-600 p-6 mb-6 project-dis relative overflow-hidden'>
                                {project.description}
                            </div>
                            <div
                                className={`${
                                    project.id % 2 === 0 ? "items-start" : "items-end"
                                } flex flex-col relative gap-4`}
                            >
                                <ul className='flex gap-4 md:gap-6 items-center capitalize text-xs md:text-base'>
                                    {project.tags.map((tag, index) => (
                                        <li key={index}>{tag}</li>
                                    ))}
                                </ul>
                                <div className='flex items-center text-black-300 gap-4'>
                                    <a
                                        href={project.links.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-2xl'
                                    >
                                        <GithubIcon
                                            width='22px'
                                            height='22px'
                                            className='fill-current transform transition-transform hover:fill-[#C6C6C6]'
                                        />
                                    </a>
                                    <a
                                        href={project.links.preview}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-2xl'
                                    >
                                        <ShareIcon
                                            width='22px'
                                            height='22px'
                                            className='fill-current transform transition-transform hover:fill-[#C6C6C6]'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${
                                project.id % 2 === 0 ? "project-img-even" : "project-img-odd"
                            }   w-full md:w-[580px] h-auto relative`}
                        >
                            <a
                                href={project.links.preview}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    src={project.links.img}
                                    alt='temp'
                                    className='w-full h-full object-contain'
                                />
                            </a>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default Project;
