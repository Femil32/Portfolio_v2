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
            className='home relative flex min-h-screen flex-col items-center justify-center pt-[65px] pb-[40px] sm:pt-[65px] md:px-[50px] md:pt-[55px]'
        >
            <div className='main_intro uppercase'>
                <div className='relative flex items-center justify-center text-[24px] text-black-300 opacity-0 dark:text-white-300 sm:text-[30px] md:text-[50px]'>
                    <span className='min-w-[80px] flex-1 sm:min-w-[105px] md:min-w-[165px]'>
                        Hi i'm
                    </span>
                    <span className='gold-line block w-full border-t-8 border-solid border-dk-gold-300 dark:border-lg-blue-300'></span>
                </div>
                <div className='link ml-[-8px] mr-[-20px] text-[90px] font-bold leading-[100px] tracking-widest text-transparent opacity-0 dark:text-white-100 sm:text-[130px] md:ml-[-8px] md:mr-[-20px] md:text-[200px] md:font-bold md:leading-[180px] md:tracking-widest'>
                        Femil
                </div>
                <div className='relative flex flex-row-reverse items-center justify-center text-[16px] text-dk-gold-300 opacity-0 dark:text-lg-blue-300 sm:text-[20px] md:mt-6 md:text-[30px]'>
                    <div className='min-w-[110px] flex-1 text-right sm:min-w-[150px] md:min-w-[200px]'>
                        <span className='block leading-[25px] md:leading-[35px]'>A Full Stack</span>
                        <span className='block leading-[25px] md:leading-[35px]'>Developer</span>
                    </div>
                    <span className='gold-line block w-full border-t-8 border-solid border-dk-gold-300 dark:border-lg-blue-300'></span>
                </div>
            </div>
            <div className='hidden lg:block'>
                <Social />
            </div>
            <div className='mouse-icon absolute bottom-4 flex w-full items-center justify-center text-3xl text-black-300 opacity-0 dark:text-white-300 md:px-[50px]'>
                <img src={ScrollGif} alt='Scroll' className='w-16' />
            </div>
            <div
                className='myMail fixed right-10 bottom-4 hidden items-center justify-center text-[14px] text-black-300 opacity-0 dark:text-white-300 lg:flex'
                style={{ writingMode: "tb-rl" }}
            >
                <a href='mailto:femilsavaliya555@gmail.com'>femilsavaliya555@gmail.com</a>
                <span className='mt-4 h-16 w-1 bg-black-300'></span>
            </div>
        </main>
    );
}

export default Home;
