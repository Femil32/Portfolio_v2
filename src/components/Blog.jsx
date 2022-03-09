import anime from "animejs";
import gsap from "gsap/all";
import React, { useEffect } from "react";
import { FolderLogo, ShareIcon } from "../helper/AllSvgs";

function Blog({ BlogData }) {
    useEffect(() => {
        gsap.to("#blogs", {
            scrollTrigger: {
                trigger: "#blogs .blog-box",
                start: "top 50%",
                onLeaveBack: self => self.disable(),
                onEnter: function () {
                    anime({
                        targets: "#blogs .blog-box",
                        // translateY: ["20", "0"],
                        delay: anime.stagger(200), // increase delay by 100ms for each elements.
                        opacity: [0, 1],
                    });
                },
            },
        });

        return () => {};
    }, []);

    return (
        <>
            <div className='blogs-grid flex justify-center items-center flex-col'>
                <div className='relative flex justify-center items-center gap-[35px] md:gap-[50px] w-full flex-wrap mb-10'>
                    {BlogData.length > 0 &&
                        BlogData.map((blog, index) => (
                            <a
                                key={index}
                                href={blog.links.preview}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='blog-box opacity-0 relative text-black-300 flex flex-row justify-center items-center w-[90vw] h-[300px]  md:w-[300px] md:h-[300px] overflow-hidden group cursor-pointer transition-transform duration-300 blogBox hover:-translate-y-2'
                            >
                                <div className='overflow-hidden p-4 absolute top-0 left-0 flex flex-col justify-start items-start bg-black-400 w-full h-full transition-transform duration-300 transform flex-grow-3 '>
                                    <div className='mb-2 text-black-300 flex justify-between items-center w-full'>
                                        <FolderLogo
                                            width='24'
                                            height='24'
                                            className='fill-current'
                                        />
                                    </div>
                                    <h1 className='text-xl font-bold tracking-wide group-hover:text-white'>
                                        {blog.title}
                                    </h1>
                                    <div className='mt-auto border-t-2 pt-2 w-full text-sm'>
                                        <ul className='flex gap-4 mb-2'>
                                            {blog.tags.map((tag, index) => (
                                                <li className=' capitalize' key={index}>
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className='text-xs'>{blog.date}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                </div>
                <a
                    href='https://dev.to/femil'
                    className='px-6 py-2 border-2 border-gold-300 hover:bg-gold-300 hover:text-black-100'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    See More
                </a>
            </div>
        </>
    );
}

export default Blog;
