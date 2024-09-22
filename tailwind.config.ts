import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      animation: {
         spin: "spin 5s linear infinite",
         "spin-back": "spin-back 5s linear forwards",
      },
      keyframes: {
         spin: {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
         },
      },
      extend: {
         fontFamily: {
            howdy: ["var(--font-captain-howdy)"],
         },
      },
   },
   plugins: [],
};
export default config;
