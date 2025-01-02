/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'preset-1': ["3.75rem", { lineHeight: "110%", letterSpacing: "-0.0625rem" }], // 60px
        'preset-1-mobile': ["2rem", { lineHeight: "110%", letterSpacing: "-0.0625rem" }], // 60px
        'preset-2': ["2.5rem", { lineHeight: "110%", letterSpacing: "-0.0625rem" }], // 40px
        'preset-2-mobile': ["1.5rem", { lineHeight: "110%", letterSpacing: "-0.0625rem" }], // 24px
        'preset-3': ["1.875rem", { lineHeight: "110%", letterSpacing: "-0.0625rem" }], // 30px
        'preset-3-mobile': ["1.375rem", { lineHeight: "110%", letterSpacing: "-0.0625rem" }], // 22px
        'preset-4': ["1.5rem", { lineHeight: "120%", letterSpacing: "-0.03125rem" }], // 24px
        'preset-4-mobile': ["1.25rem", { lineHeight: "120%", letterSpacing: "-0.03125rem" }], // 20px
        'preset-5-extrabold': ["1.25rem", { lineHeight: "110%", letterSpacing: "-0.01875rem" }], // 20px
        'preset-5': ["1.25rem", { lineHeight: "110%", letterSpacing: "-0.03125rem" }], // 20px
        'preset-6': ["1.125rem", { lineHeight: "120%", letterSpacing: "0" }], // 18px
        'preset-6-mobile': ["0.875rem", { lineHeight: "120%", letterSpacing: "0" }], // 14px
        'preset-7': ["0.75rem", { lineHeight: "120%", letterSpacing: "-0.0125rem" }], // 12px
      },
      fontWeight: {
        extrabold: "800",
        bold: "700",
        medium: "500",
        regular: "400",
      },
      fontFamily: {
        'inconsolata': ["Inconsolata", "monospace"],
      },
      colors: {
        'faded-white': "rgba(255, 255, 255, 0.08)",
        'transparent-black': "rgba(0, 0, 0, .6)",
        'dark-900': "#020114",
        neutral: {
          900: "#0D082D",
          700: "#4B4869",
          500: "#8784A5",
          300: "#D1D0D5",
          0: "#FFFFFF",
        },
        orange: {
          700: "#E1604F",
          500: "#F57463",
        },
      },
      borderRadius: {
        'radius-0': '0px',       // 0
        'radius-4': '0.25rem',   // 4px
        'radius-6': '0.375rem',  // 6px
        'radius-8': '0.5rem',    // 8px
        'radius-10': '0.625rem', // 10px
        'radius-12': '0.75rem',  // 12px
        'radius-16': '1rem',     // 16px
        'radius-20': '1.25rem',  // 20px
        'radius-24': '1.5rem',   // 24px
        'radius-full': '999px',  // Full radius
      },
      backgroundImage: {
        'gradient-01': "linear-gradient(90deg, #F37362 0%, #FFF 100%)",

        // background images
        'background-mobile': "url('/background-mobile.png')",
        'background-tablet': "url('/background-tablet.png')",
        'background-desktop': "url('/background-desktop.png')",
      },
    },
    animation: {
      'dot-load': "dot-load 1.5s ease-in-out infinite alternate",
    },
    keyframes: {
      'dot-load': {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(25px)' },
        '100%': { transform: 'translateY(-25px)' },
      }
    },
  },
  plugins: [],
};
