import anime from "animejs";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Social from "../components/Social";

import ScrollGif from "../assets/img/scroll.gif";

function Home() {
    useEffect(() => {
        anime({
            targets: [
                ".main_intro div:nth-child(1) .gold-line",
                ".main_intro div:nth-child(3) .gold-line",
            ],
            width: [0, "100%"],
            easing: "easeInOutQuad",
            delay: anime.stagger(100, { start: 1500 }),
            opacity: ["0", "1"],
            duration: 1000,
        });
        anime({
            targets: [
                ".main_intro div:nth-child(1)",
                ".main_intro div:nth-child(2)",
                ".main_intro div:nth-child(3)",
            ],
            // translateY: ["-95", "0"],
            delay: anime.stagger(100, { start: 1000 }),
            easing: "easeInOutSine",
            duration: 750,
            opacity: ["0", "1"],
        });
        anime({
            targets: [".social_icons", ".myMail"],
            // translateY: ["-95", "0"],
            delay: anime.stagger(100, { start: 2000 }),
            easing: "easeInOutSine",
            duration: 750,
            opacity: ["0", "1"],
        });
        anime({
            targets: [".mouse-icon"],
            // translateY: ["-95", "0"],
            delay: anime.stagger(100, { start: 2500 }),
            easing: "easeInOutSine",
            duration: 750,
            opacity: ["0", "1"],
        });
        return () => {};
    }, []);

    return (
        <main
            id='home'
            className='home relative min-h-screen flex justify-center items-center flex-col py-[60px] md:pt-[55px] md:px-[50px]'
        >
            <div className='main_intro uppercase'>
                <div className='text-black-300 opacity-0 relative text-[24px] md:text-[50px] flex justify-center items-center'>
                    <span className='min-w-[80px] flex-1 md:min-w-[165px]'>Hi i'm</span>
                    <span className='gold-line border-t-8 border-gold-300 border-solid block w-full'></span>
                </div>
                <div className='text-black-100 dark:text-red-500 opacity-0 text-[90px] font-bold tracking-widest leading-[100px] ml-[-8px] mr-[-20px] md:text-[200px] md:font-bold md:tracking-widest md:leading-[180px] md:ml-[-8px] md:mr-[-20px]'>
                    Femil
                </div>
                <div className='text-gold-300 opacity-0 flex flex-row-reverse justify-center items-center relative text-[16px] md:text-[30px] md:mt-6'>
                    <div className='min-w-[110px] flex-1 text-right md:min-w-[200px]'>
                        <span className='block leading-[25px] md:leading-[35px]'>A Frontend</span>
                        <span className='block leading-[25px] md:leading-[35px]'>Developer</span>
                    </div>
                    <span className='gold-line border-t-8 border-gold-300 border-solid block w-full'></span>
                </div>
            </div>
            <Social />
            <div className='mouse-icon absolute bottom-4 w-full flex justify-center items-center text-3xl text-black-300 md:px-[50px] opacity-0'>
                <img src={ScrollGif} alt='Scroll' className='w-16' />
            </div>
            <div
                className='myMail hidden fixed lg:flex justify-center items-center text-[14px] right-10 bottom-4 text-black-300 opacity-0'
                style={{ writingMode: "tb-rl" }}
            >
                <a href='mailto:femilsavaliya555@gmail.com'>femilsavaliya555@gmail.com</a>
                <span className='h-16 w-1 bg-black-300 mt-4'></span>
            </div>
        </main>
    );
}

export default Home;
