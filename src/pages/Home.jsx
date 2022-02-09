import React from "react";
import Navbar from "../components/Navbar";
import Social from "../components/Social";

function Home() {
    return (
        <main
            id='home'
            className='home relative min-h-screen flex justify-center items-center flex-col pt-[55px] px-[50px] borders-4 border-solid border-black-100'
        >
            <div className='uppercase'>
                <div className="text-black-300 text-[50px] relative before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[75%] before:right-0 before:top-1/2 before:transform before:-translate-y-1/2 ">
                    Hi i'm
                </div>
                <div className='text-black-100 text-[200px] font-bold tracking-widest leading-[180px] ml-[-8px] mr-[-20px]'>
                    Femil
                </div>
                <div className="text-gold-300 text-[30px] flex flex-col justify-end items-end mt-6 relative before:content-[''] before:absolute before:border-t-8 before:border-gold-300 before:border-solid before:w-[15%] before:right-[35%] before:top-1/2 before:transform before:-translate-y-1/2">
                    <span className='block leading-[35px]'>A Frontend</span>
                    <span className='block leading-[35px]'>Developer</span>
                </div>
            </div>
            <Social />
            <div className='absolute bottom-4 w-full flex justify-center items-center text-3xl text-black-300 px-[50px]'>
                <lord-icon
                    src='https://cdn.lordicon.com/xwjtkymn.json'
                    trigger='loop'
                    colors='primary:#ffffff,secondary:#08a88a'
                    // className='w-[350px] h-[350px]'
                    style={{ width: "50px", height: "50px" }}
                ></lord-icon>
            </div>
            <div
                className='fixed flex justify-center items-center text-[14px] right-10 bottom-4 text-black-300'
                style={{ writingMode: "tb-rl" }}
            >
                {/* <span className='tracking-[3px] font-medium'>femilsavaliya555@gmail.com</span> */}
                <a href='mailto:femilsavaliya555@gmail.com'>femilsavaliya555@gmail.com</a>
                <span className='h-16 w-1 bg-black-300 mt-4'></span>
            </div>
        </main>
    );
}

export default Home;
