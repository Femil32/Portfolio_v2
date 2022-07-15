import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";

import config from "./.env";

// https://vitejs.dev/config/
export default defineConfig(init => {
    return {
        plugins: [reactRefresh()],
        define: {
            "process.env": config[init.mode],
        },
        server: {
            port: 8000,
        },
    };
});
