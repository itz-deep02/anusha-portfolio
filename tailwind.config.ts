import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist)", "sans-serif"],
      },
    },
  },
};

export default config;