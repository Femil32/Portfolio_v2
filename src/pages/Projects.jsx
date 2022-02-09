import axios from "axios";
import React from "react";
import Project from "../components/Project";

// import { ProjectsData } from "../data/ProjectsData";

function Projects({ ProjectsData }) {
    console.log(ProjectsData);
    return (
        <div
            id='projects'
            className='text-black-200 flex justify-center items-center min-h-screen pt-32'
        >
            <div className='flex justify-center items-start flex-col max-w-[1000px] w-full'>
                <div className='relative text-left w-full text-3xl mb-8'>
                    <h1 className="block w-full before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[56%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2">
                        <span className='text-gold-300'>02.</span> Some Things I’ve Built
                    </h1>
                </div>
                <Project ProjectsData={ProjectsData} />
            </div>
        </div>
    );
}

export default Projects;
