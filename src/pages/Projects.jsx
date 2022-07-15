import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { PageLable } from "../components/micro";
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

        return () => { };
    }, []);

    return (
        <div
            id='projects'
            className='flex min-h-screen items-center justify-center pt-[65px] pb-[40px] text-black-200 dark:text-white-200 sm:pt-[65px]'
        >
            <div className='flex w-full max-w-[1000px] flex-col items-start justify-center'>
                {/* <div className='relative mb-10 flex w-full flex-col items-center justify-between text-left text-2xl md:mb-12 md:flex-row md:text-3xl'>
                    <div className='mb-2 min-w-[150px] flex-1 md:mb-0 md:min-w-[415px]'>
                        <span className='relative text-dk-gold-300 dark:text-lg-blue-300'>02.</span>
                        <span> </span>
                    </div>
                    <span className='gold-line block w-full border-t-8 border-solid border-dk-gold-300 dark:border-lg-blue-300'></span>
                </div> */}
                <PageLable
                    pageNo={'02'}
                    title={`Some Things I’ve Built`}
                />
                <Project ProjectsData={ProjectsData} />
            </div>
        </div>
    );
}

export default Projects;
