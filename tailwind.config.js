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
      spacing: {
        'spacing-0': '0px',        // 0
        'spacing-025': '0.125rem', // 2px
        'spacing-050': '0.25rem',  // 4px
        'spacing-075': '0.375rem', // 6px
        'spacing-100': '0.5rem',   // 8px
        'spacing-150': '0.75rem',  // 12px
        'spacing-200': '1rem',     // 16px
        'spacing-250': '1.25rem',  // 20px
        'spacing-300': '1.5rem',   // 24px
        'spacing-400': '2rem',     // 32px
        'spacing-500': '2.5rem',   // 40px
        'spacing-600': '3rem',     // 48px
        'spacing-800': '4rem',     // 64px
        'spacing-1000': '5rem',    // 80px
      },
      backgroundImage: {
        'gradient-01': "linear-gradient(90deg, #F37362 0%, #FFF 100%)",

        // background images
        'squiggly-line-top': "url('pattern-squiggly-line-top.svg')",
        'squiggly-line-bottom': "url('pattern-squiggly-line-bottom.svg')",

      },
    },
  },
  plugins: [],
};
