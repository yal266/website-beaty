import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@api": path.resolve(__dirname, "./src/app/core/api"),
      "@services": path.resolve(__dirname, "./src/app/core/services"),
      "@search": path.resolve(
        __dirname,
        "./src/app/ui/components/common/search"
      ),
    },
  },
});
