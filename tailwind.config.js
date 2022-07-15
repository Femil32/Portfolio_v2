module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // dark colors
                "bg-black": "#1c1e22",
                "black-100": "#C6C6C6",
                "black-200": "#929194",
                "black-300": "#a8a9af",
                "black-400": "#3D4043",
                "black-500": "#25262C",
                "black-600": "#121212",
                "dk-gold-300": "#9d884f",
                // light colors
                "bg-white": "#e3e1dd",
                "white-100": "#393939",
                "white-200": "#6d6e6b",
                "white-300": "#575650",
                "white-400": "#c2bfbc",
                "white-500": "#dad9d3",
                "white-600": "#ededed",
                "lg-blue-300": "#6f8ee4",
            },
            gridColumn: {
                "span-7/-1": "span 7 / span -1",
            },
            screens: {
                mdMax: { max: "762px" },
                smMax: { max: "639px" },
                xs: "425px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

// global
