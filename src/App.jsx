import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import axios from "axios";
import Loader from "./components/Loader";
import gsap from "gsap/all";



function App() {

    const [theme, setTheme] = useState(false);
    const [ProjectsData, setProjectsData] = useState(null);
    const [BlogsData, setBlogsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

    const fetchData = async () => {
        const request = axios.get("https://api.jsonbin.io/v3/b/6203902b69b72261be562d4a/latest", {
            headers: {
                "X-Master-Key": process.env.API_KEY, //the token is a variable which holds the token
            },
        });
        const timer = new Promise(resolve => setTimeout(resolve, 100));

        return Promise.all([request, timer]).then(([response]) => {
            setProjectsData(response?.data?.record?.projects);
            setBlogsData(response?.data?.record?.blogs);
        });
    };
    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            setTheme(false);
        }

        fetchData();

        const scrollCall = e => {
            var param = document.location.hash.substr(1).toString();
            const el = document.getElementById(param);
            if (param && el) {
                window.scroll({
                    top: el.offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
            }
        };

        // window.onload = () => {
        setTimeout(() => {
            setLoading(false);
            scrollCall();
        }, 3000);
        // };
    }, []);

    useEffect(() => {
        var cursor = document.querySelector(".cursor"),
            follower = document.querySelector(".cursor-follower");

        var posX = 0,
            posY = 0;

        var mouseX = 0,
            mouseY = 0;

        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 9;
                posY += (mouseY - posY) / 9;

                gsap.set(follower, {
                    css: {
                        left: posX - 12,
                        top: posY - 12
                    }
                });

                gsap.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }
        });

        document.onmousemove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

    }, [loading])

    return (
        <BrowserRouter>
            <div className="cursor active hidden md:block"></div>
            <div className="cursor-follower active hidden md:block"></div>
            {loading ? (
                <Loader />
            ) : (
                <div
                    className={`app relative min-h-screen w-screen overflow-hidden `}
                >
                    <div className='h-full w-full bg-bg-black px-[25px] dark:bg-bg-white'>
                        <Navbar
                            theme={theme}
                            setTheme={setTheme}
                            mobileMenuToggle={mobileMenuToggle}
                            setMobileMenuToggle={setMobileMenuToggle}
                        />
                        <Home />
                        <About />
                        {ProjectsData && <Projects ProjectsData={ProjectsData} />}
                        {BlogsData && <Blogs BlogData={BlogsData} />}
                        <Contact />
                    </div>
                </div>
            )
            }

        </BrowserRouter >
    );
}

export default App;
