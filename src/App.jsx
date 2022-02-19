import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import axios from "axios";
import Loader from "./components/Loader";

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
            setTheme(true);
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

        window.onload = () => {
            setTimeout(() => {
                setLoading(false);
                scrollCall();
            }, 3000);
        };
    }, []);

    return (
        <BrowserRouter>
            {loading ? (
                <Loader />
            ) : (
                <div className={`${theme ? "light" : "dark"} relative app `}>
                    <div className='min-h-screen px-[20px] overflow-hidden'>
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
            )}
        </BrowserRouter>
    );
}

export default App;
