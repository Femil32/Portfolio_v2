import React from "react";
import Blog from "../components/Blog";

import { BlogData } from "../data/BlogData";

function Blogs() {
    return (
        <div
            id='blogs'
            className='text-black-200 flex justify-center items-center min-h-screen pt-28'
        >
            <div className='flex justify-center items-start flex-col max-w-[1000px] w-full'>
                <div className='relative text-left w-full text-3xl mb-8'>
                    <h1 className="block w-full before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[68%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2">
                        <span className='text-gold-300'>03.</span> I love To Write
                    </h1>
                </div>
                <Blog BlogData={BlogData} />
            </div>
        </div>
    );
}

export default Blogs;
