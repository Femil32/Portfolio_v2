import React from "react";
import Blog from "../components/Blog";

import { BlogData } from "../data/BlogData";

function Blogs() {
    return (
        <div
            id='blogs'
            className='text-black-200 flex justify-center items-center min-h-screen py-[60px]'
        >
            <div className='flex justify-center items-start flex-col max-w-[1000px] w-full'>
                <div className='relative text-left w-full text-2xl mb-10 md:text-3xl md:mb-8'>
                    <h1 className="flex flex-col md:flex-row before:content-none md:before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[50%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2 md:before:w-[75%]">
                        <span className="text-gold-300 relative before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[85%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2 md:before:w-[75%] md:before:content-none">
                            03.
                        </span>
                        <span> I love To Write</span>
                    </h1>
                </div>
                <Blog BlogData={BlogData} />
            </div>
        </div>
    );
}

export default Blogs;
