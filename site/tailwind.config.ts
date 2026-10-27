import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const token = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      // The live site's type scale, which is a step smaller than Tailwind's defaults.
      fontSize: {
        xs: [".6875rem", { lineHeight: "1rem" }],
        sm: [".8125rem", { lineHeight: "1.25rem" }],
        base: [".875rem", { lineHeight: "1.5rem" }],
        lg: ["1rem", { lineHeight: "1.5rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.375rem", { lineHeight: "1.75rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      fontFamily: { sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"] },
      colors: {
        border: token("border"),
        input: token("input"),
        ring: token("ring"),
        background: token("background"),
        foreground: token("foreground"),
        primary: { DEFAULT: token("primary"), foreground: token("primary-foreground"), hover: token("primary-hover"), light: token("primary-light") },
        secondary: { DEFAULT: token("secondary"), foreground: token("secondary-foreground") },
        destructive: { DEFAULT: token("destructive"), foreground: token("destructive-foreground"), light: token("destructive-light") },
        muted: { DEFAULT: token("muted"), foreground: token("muted-foreground") },
        accent: { DEFAULT: token("accent"), foreground: token("accent-foreground") },
        popover: { DEFAULT: token("popover"), foreground: token("popover-foreground") },
        card: { DEFAULT: token("card"), foreground: token("card-foreground") },
        success: { DEFAULT: token("success"), hover: token("success-hover"), light: token("success-light") },
        warning: { DEFAULT: token("warning"), light: token("warning-light") },
        info: token("info"),
        critical: { DEFAULT: token("critical"), light: token("critical-light") },
        locked: token("locked"),
        archived: token("archived"),
        chart: {
          blue: token("chart-blue"), green: token("chart-green"), yellow: token("chart-yellow"), red: token("chart-red"),
          purple: token("chart-purple"), teal: token("chart-teal"), orange: token("chart-orange"),
        },
      },
      borderRadius: { lg: "var(--radius-lg)", md: "var(--radius-md)", sm: "calc(var(--radius) - 2px)", xl: "var(--radius-xl)" },
      boxShadow: { card: "var(--shadow-card)", button: "var(--shadow-button)" },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
