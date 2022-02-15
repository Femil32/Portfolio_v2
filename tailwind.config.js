module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "black-100": "#C6C6C6",
                "black-200": "#929194",
                "black-300": "#a8a9af",
                "black-400": "#3D4043",
                "black-500": "#25262C",
                "black-600": "#121212",
                "gold-300": "#9d884f",
                "gradient-one": "#3e4045",
                "gradient-second": "#1c1e23",
            },
            gridColumn: {
                "span-7/-1": "span 7 / span -1",
            },
            screens: {
                mdMax: { max: "767px" },
                smMax: { max: "639px" },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

// global
