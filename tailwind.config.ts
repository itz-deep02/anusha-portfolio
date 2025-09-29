import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist)", "sans-serif"],
        fraunces: ['var(--font-[fraunces])', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
};

export default config;