import type { Config } from "@react-router/dev/config";

const devBase = "/";
const prodBase = "/my-react-app";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: true,

  // Must begin with Vite’s `base` value for your dev server ("/")
  // and with the subpath you’ll use in production ("/my-react-app")
  basename: process.env.NODE_ENV === "development" ? devBase : prodBase,
} satisfies Config;
