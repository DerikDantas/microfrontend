import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const isProd = import.meta.env?.VITE_NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        orderApp:
          `${
            isProd
              ? "https://microfrontend-order-app.vercel.app"
              : "https://localhost:5001"
          }` + "/assets/orderApp.js",
        productApp:
          `${
            isProd
              ? "https://microfrontend-product-app.vercel.app"
              : "https://localhost:5002"
          }` + "/assets/productApp.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
