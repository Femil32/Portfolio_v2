import React from "react";
import Footer from "./Footer";

function Contact() {
    return (
        <div className='relative'>
            <div
                id='contact'
                className='text-black-200 flex justify-center items-center min-h-screen h-full  py-[60px]'
            >
                <div className='flex justify-center items-start flex-col max-w-[1000px] w-full h-full'>
                    <div className='relative text-left w-full text-2xl mb-10 md:text-3xl md:mb-8'>
                        <h1 className="flex flex-col md:flex-row before:content-none md:before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[50%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2 md:before:w-[75%]">
                            <span className="text-gold-300 relative before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[85%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2 md:before:w-[75%] md:before:content-none">
                                04.
                            </span>
                            <span> What's next ?</span>
                        </h1>
                    </div>
                    <div className='flex justify-center items-center flex-col max-w-[750px] mx-auto mt-auto text-center flex-1'>
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
