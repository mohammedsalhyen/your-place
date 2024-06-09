import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          800: '#393a43',
          600: '#2d3d8a',
          200: '#5c70d6',

        },
        gray: {
          100: '#e8ecf8',
        }
      },
      screens: {
        "xs": '320px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      
    },
  },
  plugins: [],
};
export default config;
