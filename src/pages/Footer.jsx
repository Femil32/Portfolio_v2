import React from "react";

function Footer() {
    return (
        <div
            id='footer'
            className='absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 transform items-center justify-center py-4 text-black-200 dark:text-white-200'
        >
            <p className='text-sm sm:text-base'>
                Design & Built by{"  "}
                <a
                    href='https://www.google.com/search?q=femil+savaliya'
                    className='border-b-2 border-dk-gold-300 pb-[2px] hover:text-white dark:border-lg-blue-300'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Femil Savaliya
                </a>
            </p>
        </div>
    );
}

export default Footer;
