import React from "react";

function Footer() {
    return (
        <div
            id='footer'
            className='absolute text-black-200 flex justify-center items-center py-4 bottom-0 left-1/2 transform -translate-x-1/2 w-full'
        >
            <p>
                Design & Built by{"  "}
                <a
                    href='https://www.google.com/search?q=femil+savaliya'
                    className='pb-[2px] border-b-2 border-gold-300 hover:text-white'
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
