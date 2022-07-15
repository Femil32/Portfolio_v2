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
                    onLeaveBack: self => self.disable(),
                    onEnter: function () {
                        anime({
                            targets: el,
                            easing: "spring(1, 80, 10, 0)",
                            delay: anime.stagger(100),
                            opacity: [0, 1],
                            duration: 1200,
                            translateY: [20, 0],
                        });
                    },
                },
            });
        });

        return () => { };
    }, []);
    return (
        <>
            {ProjectsData.length > 0 &&
                ProjectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className='project relative z-[99] mb-16 flex w-full grid-cols-12 grid-rows-1 flex-col-reverse items-center overflow-hidden opacity-0 md:mb-32 md:grid md:gap-[10px]'
                    >
                        <div
                            className={`${project.id % 2 === 0
                                    ? "project-content-odd"
                                    : "project-content-even"
                                } z-[99] mt-6 h-auto w-full text-sm md:mt-0 xs:text-base`}
                        >
                            <div className='mb-2 md:mb-4'>
                                <p className='text-xs md:mb-2'>Featured Project</p>
                                <a
                                    href={project.links.preview}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-xl capitalize tracking-wide md:text-3xl'
                                >
                                    {project.name}
                                </a>
                            </div>
                            <div className='project-dis relative mb-6 overflow-hidden bg-black-600 p-2 sm:p-4 xs:p-6 leading-6'>
                                {project.description}
                            </div>
                            <div
                                className={`${project.id % 2 === 0 ? "items-start" : "items-end"
                                    } relative flex flex-col gap-4`}
                            >
                                <ul className='flex flex-wrap items-center justify-end gap-4 text-xs capitalize md:gap-6 md:text-base'>
                                    {project.tags.map((tag, index) => (
                                        <li key={index}>{tag}</li>
                                    ))}
                                </ul>
                                <div className='flex items-center gap-4 text-black-300 dark:text-white-300'>
                                    <a
                                        href={project.links.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-2xl'
                                    >
                                        <GithubIcon
                                            width='22px'
                                            height='22px'
                                            className='transform fill-current transition-transform hover:fill-[#C6C6C6]'
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
                                            className='transform fill-current transition-transform hover:fill-[#C6C6C6]'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${project.id % 2 === 0 ? "project-img-even" : "project-img-odd"
                                }   relative h-auto w-full md:w-[580px]`}
                        >
                            <a
                                href={project.links.preview}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    src={project.links.img}
                                    alt='temp'
                                    className='h-full w-full object-contain'
                                />
                            </a>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default Project;
