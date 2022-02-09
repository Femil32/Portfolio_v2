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

        window.onbeforeunload = function () {
            window.setTimeout(function () {
                window.location = "/";
            }, 5000);
            window.onbeforeunload = null;
            window.scrollTo(0, 0);
        };

        window.onload = () => {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        };
    }, []);

    return (
        <BrowserRouter>
            <div className={`${theme ? "light" : "dark"} relative app `}>
                {/* <Switch>
                    <Route path='/' component={() => <Home theme={theme} setTheme={setTheme} />} />
                    <Route path='/#about' component={About} exact />
                </Switch> */}
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Navbar theme={theme} setTheme={setTheme} />
                        <Home />
                        <About />
                        {ProjectsData && <Projects ProjectsData={ProjectsData} />}
                        {BlogsData && <Blogs BlogData={BlogsData} />}
                        <Contact />
                    </>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
