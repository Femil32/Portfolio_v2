import gsap from "gsap/all";
import React, { useEffect } from "react";
import Blog from "../components/Blog";
import { PageLable } from "../components/micro";

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
            className='flex min-h-screen items-center justify-center pt-[65px] pb-[40px] pb-[40px] text-black-200 dark:text-white-200 sm:pt-[65px]'
        >
            <div className='flex w-full max-w-[1000px] flex-col items-start justify-center'>
                <PageLable
                    pageNo={`03`}
                    title={`I love To Write !!`}
                />
                <Blog BlogData={BlogData} />
            </div>
        </div>
    );
}

export default Blogs;
