import gsap from "gsap/all";
import React, { useEffect } from "react";
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
        <div className='relative'>
            <div
                id='contact'
                className='text-black-200 flex justify-center items-center min-h-screen h-full  py-[60px]'
            >
                <div className='flex justify-center items-start flex-col max-w-[1000px] w-full h-full'>
                    <div className='relative text-left w-full text-2xl mb-10 md:text-3xl md:mb-8'>
                        <div className='relative flex flex-col md:flex-row justify-between items-center text-left w-full text-2xl mb-10 md:text-3xl md:mb-8'>
                            <div className='min-w-[150px] flex-1 md:min-w-[300px]'>
                                <span className='text-gold-300 relative'>04.</span>
                                <span> What's next ?</span>
                            </div>
                            <span className='gold-line border-t-8 border-gold-300 border-solid block w-full'></span>
                        </div>
                    </div>
                    <div className='contact-info flex justify-center items-center flex-col max-w-[750px] mx-auto mt-auto text-center flex-1'>
                        <h1 className='text-3xl md:text-4xl mb-4'>Get in touch</h1>
                        <p className='text-sm md:text-base mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut
                            optio sapiente harum ad facilis vitae repudiandae fugit at! Quod ut
                            nihil quae accusamus corrupti ratione totam voluptatibus ipsam aliquam.
                        </p>
                        <a
                            href='mailto:femilsavaliya555@gmail.com'
                            className='px-6 py-2 border-2 border-gold-300 hover:bg-gold-300 hover:text-black-100'
                        >
                            Say Hello
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
