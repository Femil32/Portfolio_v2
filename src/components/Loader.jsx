import anime from "animejs";
import React, { useEffect } from "react";

function Loader() {
    useEffect(() => {
        const text1 = document.querySelector(".text");
        text1.innerHTML = text1.textContent.replace(/\S/g, '<span class="letter">$&</span>');

        var tlAnimeLoad = anime.timeline();

        tlAnimeLoad.add({
            targets: ".text .letter",
            translateY: [50, 0],
            translatez: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: (el, i) => 700 + 50 * i,
        });

        return () => {};
    }, []);

    return (
        <div
            id='loader'
            className='fixed top-0 left-0 min-w-full h-screen text-black-200 bg-black-500 flex justify-center items-center overflow-hidden z-[99999]'
        >
            <div className='absolute top-0 left-0  h-2 load-top bg-red-600 flex justify-center items-center w-full'></div>
            <div className='load-right  text-gold-300 text-5xl font-bold'>
                <span className='text'>Welcome</span>
            </div>
            <div className='loader-reveal-1'></div>
            <div className='loader-reveal-2'></div>
        </div>
    );
}

export default Loader;
