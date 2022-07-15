import anime from "animejs";
import React, { useEffect } from "react";

function Loader() {
    useEffect(() => {
        // const text1 = document.querySelector(".text");
        // text1.innerHTML = text1.textContent.replace(/\S/g, '<span class="letter opacity-0">$&</span>');

        var tlAnimeLoad = anime.timeline();

        tlAnimeLoad.add({
            targets: ".text .letter",
            translateY: [30, 0],
            translatez: 0,
            opacity: [0, 1],
            easing: "spring(1, 80, 10, 0)",
            duration: 1000,
            delay: (el, i) => 700 + 50 * i,
        });

        return () => { };
    }, []);

    return (
        <div
            id='loader'
            className='fixed top-0 left-0 z-[99999] flex h-screen min-w-full items-center justify-center overflow-hidden bg-black-500 text-black-200 dark:text-white-200'
        >
            <div className='load-top absolute top-0  left-0 flex h-2 w-full items-center justify-center bg-red-600'></div>
            <div className='load-right  text-5xl font-bold text-dk-gold-300 dark:text-lg-blue-300'>
                <span className='text flex'>
                    <div className='letter opacity-0'>W</div>
                    <div className='letter opacity-0'>e</div>
                    <div className='letter opacity-0'>l</div>
                    <div className='letter opacity-0'>c</div>
                    <div className='letter opacity-0'>o</div>
                    <div className='letter opacity-0'>m</div>
                    <div className='letter opacity-0'>e</div>
                </span>
            </div>
            <span className='fixed bottom-4'>Under Development</span>
        </div>
    );
}

export default Loader;
