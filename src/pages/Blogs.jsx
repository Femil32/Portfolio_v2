import gsap from "gsap/all";
import React, { useEffect } from "react";
import Blog from "../components/Blog";

import { BlogData } from "../data/BlogData";

function Blogs() {
    useEffect(() => {
        gsap.fromTo(
            "#blogs .gold-line",
            {
                width: 0,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: "#blogs .gold-line",
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
            id='blogs'
            className='text-black-200 flex justify-center items-center min-h-screen py-[60px]'
        >
            <div className='flex justify-center items-start flex-col max-w-[1000px] w-full'>
                <div className='relative text-left w-full text-2xl mb-10 md:text-3xl md:mb-8'>
                    <div className='relative flex flex-col md:flex-row justify-between items-center text-left w-full text-2xl mb-10 md:text-3xl md:mb-8'>
                        <div className='min-w-[150px] flex-1 md:min-w-[320px] mb-2 md:mb-0'>
                            <span className='text-gold-300 relative'>03.</span>
                            <span> I love To Write !!</span>
                        </div>
                        <span className='gold-line border-t-8 border-gold-300 border-solid block w-full'></span>
                    </div>
                </div>
                <Blog BlogData={BlogData} />
            </div>
        </div>
    );
}

export default Blogs;
