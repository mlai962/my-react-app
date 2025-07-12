import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => {
  const isDev = command === "serve";

  return {
    base: isDev ? "/" : "/my-react-app/",
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  };
});
