import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CloseIcon, MenuIcon, MoonIcon, NameLogo, SunIcon } from "../helper/AllSvgs";
import anime from "animejs/lib/anime.es.js";

function Navbar({ theme, setTheme, mobileMenuToggle, setMobileMenuToggle }) {
    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-80px";
            }
            if (currentScrollPos !== 0) {
                document.getElementById("navbar").classList.add("showNav");
            } else if (currentScrollPos === 0) {
                document.getElementById("navbar").classList.remove("showNav");
            }
            prevScrollpos = currentScrollPos;
        };

        anime({
            targets: "#logo",
            translateY: ["-35", "0"],
            delay: anime.stagger(100), // increase delay by 100ms for each elements.
            opacity: ["0", "1"],
        });
        anime({
            targets: "#mob-menu",
            translateY: ["-95", "0"],
            delay: anime.stagger(150), // increase delay by 100ms for each elements.
            easing: "easeInOutSine",
            duration: 750,
            opacity: ["0", "1"],
        });
        anime({
            targets: "#nav-links li",
            translateY: ["-35", "0"],
            delay: anime.stagger(200), // increase delay by 100ms for each elements.
            opacity: ["0", "1"],
        });

        return () => {};
    }, []);

    Array.from(document.querySelectorAll("#nav-links li")).forEach(el => {
        el.addEventListener("click", () => {
            setMobileMenuToggle(false);
        });
    });

    return (
        <>
            <nav
                id='navbar'
                className='fixed flex justify-between items-center w-screen top-0 left-0 right-0 text-black-200 transition-all duration-[0.25s] z-[999] lg:h-[80px] lg:px-[50px] h-auto px-[20px] py-[20px]'
            >
                <div
                    id='logo'
                    className='relative logo w-[50px] h-[50px] flex justify-center items-center text-gold-300 opacity-0'
                >
                    <a href='/#home' className='w-full h-full '>
                        <NameLogo width='100' />
                    </a>
                </div>
                <div
                    id='mob-menu'
                    className='relative logo w-auto h-[50px] justify-center items-center flex sm:hidden opacity-0'
                    onClick={() => {
                        setMobileMenuToggle(true);
                    }}
                >
                    <MenuIcon width='30' className='fill-current' />
                </div>
                <ul
                    id='nav-links'
                    className={`fixed w-[60vw] bg-red-50 flex-col top-0 transition-all duration-300  ${
                        mobileMenuToggle ? "right-0 nav_blur" : "-right-full"
                    } bottom-0 z-[999999] h-screen uppercase font-medium flex justify-center items-center gap-[2rem] overflow-hidden p-[10px] sm:relative sm:flex sm:justify-between sm:items-center sm:gap-[2rem] md:gap-[rem] fixed sm:w-auto sm:right-0 sm:bg-transparent sm:h-auto sm:flex-row lg:gap-[5rem] `}
                >
                    <li
                        className='absolute logo w-[50px] h-[50px] justify-center items-center top-3 right-3 flex sm:hidden opacity-0'
                        onClick={() => {
                            setMobileMenuToggle(false);
                        }}
                    >
                        <CloseIcon width='30' className='fill-current' />
                    </li>
                    <li className='hover:text-black-100 w-full text-center opacity-0'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='hover:text-black-100 w-full text-center opacity-0'>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li className='hover:text-black-100 w-full text-center opacity-0'>
                        <a href='#blogs'>blogs</a>
                    </li>
                    <li className='hover:text-black-100 w-full text-center opacity-0'>
                        <a href='#contact'>Contact</a>
                    </li>
                    <li className='cursor-pointer w-full text-center mx-auto opacity-0'>
                        <label
                            htmlFor='checkbox'
                            className='w-[40px] h-[20px] bg-[#111] mx-auto flex rounded-[50px] items-center justify-between p-[5px] relative transform scale-150 cursor-pointer'
                        >
                            <input
                                type='checkbox'
                                className='opacity-0 peer absolute cursor-pointer'
                                id='checkbox'
                                defaultChecked='true'
                                onChange={e => {
                                    setTheme(e.target.checked);
                                }}
                            />

                            <SunIcon
                                width='12px'
                                height='12px'
                                className='fill-[#FFFF00] cursor-pointer'
                            />

                            <MoonIcon
                                width='12px'
                                height='12px'
                                className='fill-[#FFC0CB] cursor-pointer'
                            />

                            <div className='w-4 h-4 bg-white absolute top-[50%] left-[2px] rounded-[50%] transform -translate-y-1/2 transition-transform duration-[0.25s] peer-checked:translate-x-[20px] cursor-pointer'></div>
                        </label>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
