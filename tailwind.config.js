/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // === LIGHT TROPICAL THEME ===
        "primary": "#16a34a",          // Xanh lá tươi chủ đạo
        "primary-hover": "#15803d",    // Xanh lá đậm hơn khi hover
        "primary-light": "#dcfce7",    // Xanh lá rất nhạt (bg accent)
        "accent": "#f59e0b",           // Vàng nắng nhiệt đới
        "accent-light": "#fef3c7",     // Vàng rất nhạt

        // Nền sáng
        "background": "#f8fafc",        // Nền chính trắng xanh nhạt
        "background-light": "#ffffff",  // Trắng tinh
        "background-dark": "#f0fdf4",   // Xanh lá siêu nhạt (thay background-dark sections)
        "surface": "#ffffff",           // Surface chính
        "surface-deep": "#e8f5e9",      // Xanh lá nhạt hơn

        // Chữ
        "on-surface": "#1a2e1a",        // Chữ chính rất đậm
        "on-background": "#1a2e1a",     // Chữ trên nền
        "secondary": "#4b6351",         // Chữ phụ xanh lá đậm vừa

        // Borders & dividers
        "border-organic": "#bbf7d0",    // Viền xanh lá nhạt
        "outline-variant": "#d1fae5",   // Outline nhạt
        "outline": "#86efac",           // Outline vừa

        // Surface containers
        "surface-container": "#f0fdf4",
        "surface-container-low": "#f8fafc",
        "surface-container-high": "#dcfce7",
        "surface-container-highest": "#bbf7d0",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#d1fae5",
        "surface-bright": "#ffffff",
        "surface-dim": "#e8f5e9",
        "surface-tint": "#16a34a",

        // Tonal / fixed
        "primary-fixed": "#bbf7d0",
        "primary-fixed-dim": "#86efac",
        "primary-container": "#dcfce7",
        "on-primary": "#ffffff",
        "on-primary-container": "#14532d",
        "on-primary-fixed": "#052e16",
        "on-primary-fixed-variant": "#166534",

        // Secondary
        "secondary-container": "#d1fae5",
        "secondary-fixed": "#bbf7d0",
        "secondary-fixed-dim": "#86efac",
        "on-secondary": "#052e16",
        "on-secondary-container": "#1a4731",
        "on-secondary-fixed": "#052e16",
        "on-secondary-fixed-variant": "#166534",

        // Tertiary (accent vàng)
        "tertiary": "#fef3c7",
        "tertiary-container": "#fde68a",
        "tertiary-fixed": "#fef9c3",
        "tertiary-fixed-dim": "#fde047",
        "on-tertiary": "#78350f",
        "on-tertiary-container": "#451a03",
        "on-tertiary-fixed": "#451a03",
        "on-tertiary-fixed-variant": "#7c2d12",

        // Error
        "error": "#dc2626",
        "error-container": "#fee2e2",
        "on-error": "#ffffff",
        "on-error-container": "#7f1d1d",

        // Inverse
        "inverse-surface": "#1a2e1a",
        "inverse-primary": "#86efac",
        "inverse-on-surface": "#f0fdf4",

        // Legacy compat
        "primary-alt": "#4ade80",
        "text-on-dark": "#1a2e1a",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "headline-lg-mobile": ["Manrope"],
        "headline-lg": ["Manrope"],
        "display-xl": ["Manrope"],
        "body-md": ["Manrope"],
        "body-lg": ["Manrope"],
        "headline-md": ["Manrope"],
        "display-xl-mobile": ["Manrope"],
        "label-bold": ["Manrope"],
      },
      fontSize: {
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "800" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "800" }],
        "display-xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        "display-xl-mobile": ["48px", { lineHeight: "1.1", fontWeight: "800" }],
        "label-bold": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "700" }],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px",
      },
      spacing: {
        "gutter": "1.5rem",
        "section-padding": "5rem",
        "base": "4px",
        "container-max": "1200px",
      },
    },
  },
  plugins: [],
}
