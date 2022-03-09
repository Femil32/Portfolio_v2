import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import Project from "../components/Project";

// import { ProjectsData } from "../data/ProjectsData";
gsap.registerPlugin(ScrollTrigger);

function Projects({ ProjectsData }) {
    useEffect(() => {
        gsap.fromTo(
            "#projects .gold-line",
            {
                width: 0,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: "#projects .gold-line",
                    start: "top 75%",
                    onLeaveBack: self => self.disable(),
                },
                width: "100%",
            }
        );

        return () => {};
    }, []);

    return (
        <div
            id='projects'
            className='text-black-200 flex justify-center items-center min-h-screen py-[60px]'
        >
            <div className='flex justify-center items-start flex-col max-w-[1000px] w-full'>
                <div className='relative flex flex-col md:flex-row justify-between items-center text-left w-full text-2xl mb-10 md:text-3xl md:mb-12'>
                    <div className='min-w-[150px] flex-1 md:min-w-[415px] mb-2 md:mb-0'>
                        <span className='text-gold-300 relative'>02.</span>
                        <span> Some Things I’ve Built</span>
                    </div>
                    <span className='gold-line border-t-8 border-gold-300 border-solid block w-full'></span>
                </div>
                <Project ProjectsData={ProjectsData} />
            </div>
        </div>
    );
}

export default Projects;
