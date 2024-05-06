import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#101720",
        "neo-pink": "#F294C0",
        "cherry-pink": "#F2BDD6",
        "neo-blue": "#04D9D9",
        blue: "#17A0BF",
        dark: "#101720",
        "gray-50": "#F7FAFC",
        "gray-100": "#EDF2F7",
        "gray-200": "#E2E8F0",
        "gray-300": "#CCD5E0",
        "gray-600": "#4B5667",
      },
      backgroundImage: {
        nibi: "linear-gradient(141.99deg, #17A0BF 5.81%, #11BBCA 23.7%, #09D4D7 36.22%, #82D1D9 48.75%, #CDC6D7 59.93%, #F2BAD5 70.66%, #F2A9CB 83.63%, #F29AC4 95.26%)",
        "grad-grey-bg-1": "linear-gradient(to top, #6B608A, #4D4F67)",
        "grad-nibi-v1":
          "linear-gradient(to top, #FEF3CC 0%, #D2BBC4 23%, #B689D3 47%, #9493FF 70%, #4C1CB2 100%)",
        "gradient-full-nibi-v0":
          "linear-gradient(135deg, #F2BDD6 0%, #F29AC4 23%, #04D9D9 67%, #17A0BF 100%)",
        "gradient-full-nibi-v1":
          "linear-gradient(135deg, #F29AC4 0%, #F2A9CB 13%, #F2BAD5 28%, #CDC6D7 40%, #82D1D9 52%, #09D4D7 66%, #11BBCA 80%, #17A0BF 100%)",
        "grad-nibi-pink-dark":
          "linear-gradient(135deg, #F294C0 0%, #F2BDD6 100%)",
        "grad-nibi-blue-dark": "linear-gradient(#04D9D9 0%, #17A0BF 100%)",
        "grad-nibi-pink-orange": "linear-gradient(#F294C0 0%, #FF9B3F 100%)",
        linear:
          "linear-gradient(#D34E14 0%, #EA7D0B 22%, #FFCC4C 48%, #8ECAE6 72%, #2671BC 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
