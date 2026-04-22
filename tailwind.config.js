/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "error-container": "#93000a",
        "tertiary-fixed-dim": "#e9c176",
        "secondary-fixed": "#dfe3e3",
        "surface-bright": "#3a3939",
        "on-primary-container": "#7f9df8",
        "on-secondary": "#2c3132",
        "on-surface-variant": "#c4c6d4",
        "surface": "#0a0a0a",
        "inverse-surface": "#e5e2e1",
        "surface-container-lowest": "#080808",
        "primary-fixed-dim": "#b4c5ff",
        "on-tertiary-fixed-variant": "#5d4201",
        "surface-variant": "#1f1f1f",
        "surface-container-high": "#222222",
        "tertiary-container": "#4a3400",
        "tertiary-fixed": "#ffdea5",
        "primary": "#3d7eff",
        "surface-tint": "#3d7eff",
        "outline-variant": "#333540",
        "on-secondary-fixed-variant": "#424848",
        "background": "#0a0a0a",
        "on-tertiary-container": "#c09c55",
        "secondary": "#c2c7c7",
        "on-secondary-container": "#b1b6b6",
        "surface-container-low": "#111111",
        "primary-container": "#003087",
        "on-tertiary": "#412d00",
        "on-primary": "#ffffff",
        "outline": "#8e909d",
        "inverse-primary": "#3959b0",
        "surface-container-highest": "#2a2a2a",
        "error": "#ffb4ab",
        "on-primary-fixed-variant": "#1c4197",
        "on-primary-fixed": "#00174b",
        "surface-container": "#171717",
        "on-error-container": "#ffdad6",
        "inverse-on-surface": "#313030",
        "on-error": "#690005",
        "secondary-fixed-dim": "#c2c7c7",
        "primary-fixed": "#dbe1ff",
        "secondary-container": "#424848",
        "tertiary": "#e9c176",
        "on-background": "#e5e2e1",
        "on-secondary-fixed": "#171c1d",
        "on-tertiary-fixed": "#261900",
        "surface-dim": "#0a0a0a",
        "on-surface": "#e5e2e1"
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Inter"],
        body: ["Inter"],
        label: ["Inter"]
      },
      backgroundImage: {
        "elite-spotlight": "radial-gradient(circle at 50% 50%, rgba(129,236,255,0.15) 0%, transparent 70%)"
      }
    }
  },
  plugins: []
}
