import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "../helper/AllSvgs";

function Navbar({ theme, setTheme }) {
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

        return () => {};
    }, []);

    return (
        <>
            <div
                id='navbar'
                className='fixed flex justify-between items-center h-[80px] px-[50px] w-full top-0 text-black-200 transition-all duration-[0.25s] z-[999]'
            >
                <div className='logo'>
                    <a href='/#home'>F</a>
                </div>
                <ul className='relative flex justify-between items-center gap-[5rem] uppercase font-medium'>
                    <li className='hover:text-black-100'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='hover:text-black-100'>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li className='hover:text-black-100'>
                        <a href='#blogs'>blogs</a>
                    </li>
                    <li className='hover:text-black-100'>
                        <a href='#contact'>Contact</a>
                    </li>
                    <li>
                        <div className='cursor-pointer'>
                            <label
                                htmlFor='checkbox'
                                className='w-[40px] h-[20px] bg-[#111] flex rounded-[50px] items-center justify-between p-[5px] relative transform scale-150 cursor-pointer'
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
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
