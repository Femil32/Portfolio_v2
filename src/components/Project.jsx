import React from "react";

import Temp1 from "../assets/img/temp1.png";
import { GithubIcon, ShareIcon } from "../helper/AllSvgs";

function Project({ ProjectsData }) {
    console.log(ProjectsData);
    return (
        <>
            {ProjectsData.length > 0 &&
                ProjectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className='grid grid-cols-12 grid-rows-1 relative gap-[10px] items-center w-full z-[99] mb-32'
                    >
                        <div
                            className={`${
                                project.id % 2 === 0
                                    ? "project-content-odd"
                                    : "project-content-even"
                            } w-full h-auto z-[99]`}
                        >
                            <div className='mb-4'>
                                <p className='text-xs mb-2'>Featured Project</p>
                                <a
                                    href='https://femil-tesla-clone-323232.web.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-3xl capitalize tracking-wide'
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
                                <ul className='flex gap-6 items-center capitalize '>
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
                            }   w-[580px] h-auto relative`}
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
