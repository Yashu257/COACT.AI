import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5174,
  },
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Split vendor chunks to reduce memory pressure
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["motion"],
          lucide: ["lucide-react"],
        },
      },
    },
    // Limit parallel asset processing to reduce memory usage
    assetsInlineLimit: 0,
  },
});
