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
                        targets: ".blog-box",
                        translateY: ["50", "0"],
                        opacity: [0, 1],
                        easing: "spring(1, 80, 10, 0)",
                        delay: anime.stagger(100),
                    });
                },
            },
        });

        return () => { };
    }, []);

    return (
        <>
            <div className='blogs-grid flex w-full flex-col items-center justify-center'>
                <div className='relative mb-10 flex w-full flex-wrap items-center justify-center gap-[25px]'>
                    {BlogData.length > 0 &&
                        BlogData.map((blog, index) => (
                            <a
                                key={index}
                                id={`blog-${index}`}
                                href={blog.links.preview}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='blog-box blogBox transition-all group relative flex h-[300px] w-full origin-bottom cursor-pointer flex-row items-center  justify-center overflow-hidden text-black-300 opacity-0 hover:-translate-y-2 dark:text-white-300 sm:h-[300px] sm:w-[300px]'
                            >
                                <div className=' flex-grow-3 absolute top-0 left-0 flex h-full w-full transform flex-col items-start justify-start overflow-hidden bg-black-400 p-4 transition-transform duration-300 '>
                                    <div className='mb-2 flex w-full items-center justify-between text-black-300 dark:text-white-300'>
                                        <FolderLogo
                                            width='24'
                                            height='24'
                                            className='fill-current'
                                        />
                                    </div>
                                    <h1 className='text-xl font-bold tracking-wide text-white md:text-black-300 md:group-hover:text-white'>
                                        {blog.title}
                                    </h1>
                                    <div className='mt-auto w-full border-t-2 pt-2 text-sm text-white md:text-black-300 md:group-hover:text-white'>
                                        <ul className='mb-2 flex gap-4'>
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
                    className='btn'
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
