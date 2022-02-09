import React from "react";
import Footer from "./Footer";

function Contact() {
    return (
        <div className='relative'>
            <div
                id='contact'
                className='text-black-200 flex justify-center items-center min-h-screen h-full pt-28'
            >
                <div className='flex justify-center items-start flex-col max-w-[1000px] w-full h-full'>
                    <div className='relative text-left w-full text-3xl mb-8'>
                        <h1 className="block w-full before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[70%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2">
                            <span className='text-gold-300'>04.</span> What's next ?
                        </h1>
                    </div>
                    <div className='flex justify-center items-center flex-col max-w-[750px] mx-auto mt-auto text-center flex-1'>
                        <h1 className='text-4xl mb-4'>Get in touch</h1>
                        <p className='mb-6'>
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
