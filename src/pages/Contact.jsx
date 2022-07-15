import gsap from "gsap/all";
import React, { useEffect } from "react";
import { PageLable } from "../components/micro";
import Social from "../components/Social";
import Footer from "./Footer";

function Contact() {
    useEffect(() => {
        gsap.fromTo(
            "#contact .gold-line",
            {
                width: 0,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: "#contact .gold-line",
                    start: "top 75%",
                },
                width: "100%",
                opacity: 1,
            }
        );
        gsap.fromTo(
            "#contact .contact-info",
            {
                opacity: 0,
                translateY: 20,
            },
            {
                scrollTrigger: {
                    trigger: "#contact .contact-info",
                    start: "top 75%",
                },
                translateY: 0,
            }
        );

        return () => {};
    }, []);

    return (
        <div className='relative' id='contact'>
            <div className='flex h-screen min-h-screen items-center justify-center pt-[65px] pb-[40px] text-black-200 dark:text-white-200 sm:pt-[65px]'>
                <div className='flex h-full w-full max-w-[1000px] flex-col items-start justify-center'>
                    <PageLable
                        pageNo={`04`}
                        title={`What's next ?`}
                    />
                    <div className='contact-info mx-auto mt-auto flex max-w-[550px] flex-1 flex-col items-center justify-center text-center'>
                        <h1 className='mb-4 text-3xl md:text-4xl'>Get in touch</h1>
                        <p className='mb-6 text-sm md:text-base'>
                            Although I’m not currently looking for any new opportunities, my inbox
                            is always open. Whether you have a question or just want to say hi, I’ll
                            try my best to get back to you!
                        </p>
                        <a
                            href='mailto:femilsavaliya555@gmail.com'
                            className='btn'
                        >
                            Say Hello
                        </a>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-[56px] w-full py-2 lg:hidden'>
                <Social />
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
