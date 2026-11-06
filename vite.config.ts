import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api-ecoverse": {
                target: "https://app.converse.com.br",
                changeOrigin: true,
                rewrite:  (path) => path.replace(/^\/api-econverse/, '') ,

            },
        },
    },
});








