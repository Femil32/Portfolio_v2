import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CloseIcon, MenuIcon, MoonIcon, NameLogo, SunIcon } from "../helper/AllSvgs";
import anime from "animejs/lib/anime.es.js";

function Navbar({ theme, setTheme, mobileMenuToggle, setMobileMenuToggle }) {
    const mobMenuOpen = value => {
        setMobileMenuToggle(value);
        value
            ? document.body.classList.add("overflow-hidden")
            : document.body.classList.remove("overflow-hidden");
    };
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

        return () => { };
    }, []);

    Array.from(document.querySelectorAll("#nav-links li")).forEach(el => {
        el.addEventListener("click", () => {
            mobMenuOpen(false);
        });
    });

    return (
        <>
            <nav
                id='navbar'
                className='fixed top-0 left-0 right-0 z-[999] flex h-auto w-screen items-center justify-between px-[20px] py-[20px] text-black-200 transition-all duration-[0.25s] dark:text-white-200 lg:h-[80px] lg:px-[50px]'
            >
                <div
                    id='logo'
                    className='logo relative flex h-[40px] w-[40px] items-center justify-center overflow-hidden text-dk-gold-300 opacity-0 dark:text-lg-blue-300 sm:h-[50px] sm:w-[50px]'
                >
                    <a href='/#home' className='h-full w-full text-black-300 dark:text-white-300'>
                        <NameLogo className='w-[80px]' />
                    </a>
                </div>
                <div
                    id='mob-menu'
                    className='logo relative flex h-[50px] w-auto items-center justify-center opacity-0 sm:hidden'
                >
                    <div
                        className='relative h-[25px] w-[35px]'
                        onClick={() => {
                            mobMenuOpen(!mobileMenuToggle);
                        }}
                    >
                        <span
                            className={`absolute top-0 block h-[4px] rounded-[5px] bg-black-200 transition-transform duration-300 ${mobileMenuToggle
                                ? "top-1/2 w-full -translate-y-1/2 rotate-45"
                                : "top-0 w-1/2 -translate-y-0 rotate-0"
                                }`}
                        ></span>
                        <span
                            className={`absolute top-1/2 block h-[4px] -translate-y-1/2 transform rounded-[5px] bg-black-200 transition-transform duration-300 ${mobileMenuToggle ? "w-0" : "w-full"
                                }`}
                        ></span>
                        <span
                            className={`absolute bottom-0 right-0 block h-[4px] rounded-[5px] bg-black-200 transition-transform duration-300 ${mobileMenuToggle
                                ? "bottom-1/2 w-full -translate-y-1/2 -rotate-45"
                                : "bottom-0 w-1/2 -translate-y-0 rotate-0"
                                }`}
                        ></span>
                    </div>
                </div>
                <ul
                    id='nav-links'
                    aria-hidden='true'
                    className={`fixed top-0 bottom-0 z-[-1] flex h-screen w-[60vw] flex-col items-center justify-center gap-[2rem] overflow-hidden bg-black-500 p-[10px] font-medium uppercase transition-all duration-300 md:overflow-visible ${mobileMenuToggle ? "nav_blur right-0" : "-right-full"
                        } sm:relative sm:right-0 sm:flex sm:h-auto sm:w-auto sm:flex-row sm:items-center sm:justify-between sm:gap-[2rem] sm:bg-transparent md:gap-[rem] lg:gap-[5rem] `}
                >
                    {/* <li
                        className='absolute logo w-[50px] h-[50px] justify-center items-center top-3 right-3 flex sm:hidden opacity-0'
                        onClick={() => {
                            mobMenuOpen(false);
                        }}
                    >
                        <CloseIcon width='30' className='fill-current' />
                    </li> */}
                    <li className='w-full text-center opacity-0 hover:text-black-100 dark:text-white-100 '>
                        <a href='#about'>About</a>
                    </li>
                    <li className='w-full text-center opacity-0 hover:text-black-100 dark:text-white-100'>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li className='w-full text-center opacity-0 hover:text-black-100 dark:text-white-100'>
                        <a href='#blogs'>Blogs</a>
                    </li>
                    <li className='w-full text-center opacity-0 hover:text-black-100 dark:text-white-100'>
                        <a href='#contact'>Contact</a>
                    </li>
                    {/* <li className='mx-auto w-full cursor-pointer text-center opacity-0'>
                        <label
                            htmlFor='checkbox'
                            className='relative mx-auto flex h-[20px] w-[40px] scale-150 transform cursor-pointer items-center justify-between rounded-[50px] bg-[#111] p-[5px]'
                        >
                            <input
                                type='checkbox'
                                className='peer absolute cursor-pointer opacity-0'
                                id='checkbox'
                                defaultChecked='true'
                                onChange={e => {
                                    setTheme(e.target.checked);
                                }}
                            />

                            <SunIcon
                                width='12px'
                                height='12px'
                                className='cursor-pointer fill-[#FFFF00]'
                            />

                            <MoonIcon
                                width='12px'
                                height='12px'
                                className='cursor-pointer fill-[#FFC0CB]'
                            />

                            <div className='absolute top-[50%] left-[2px] h-4 w-4 -translate-y-1/2 transform cursor-pointer rounded-[50%] bg-white transition-transform duration-[0.25s] peer-checked:translate-x-[20px]'></div>
                        </label>
                    </li> */}
                    <li className='mx-auto w-full cursor-pointer text-center opacity-0'>
                        <label
                            htmlFor='checkbox'
                            className='btn'
                        >
                            <a
                                href='https://drive.google.com/file/d/1V0EBNMuFrXzSugYpdr2rEZfGpH43nWkv/view?usp=sharing'
                                target='_blank'
                                rel='noopener noreferrer'
                                className=''
                            >
                                Resume
                            </a>
                        </label>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
