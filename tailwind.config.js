const colors = require("tailwindcss/colors")

module.exports = {
    content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}", "src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    ...colors.sky,
                    DEFAULT: colors.sky["500"],
                },
                screens: {
                    xs: "300px",
                    sm: "480px",
                    md: "768px",
                    lg: "976px",
                    xl: "1440px",
                },
                spacing: {
                    128: "32rem",
                },
                widths: {
                    76: "19rem",
                },
            },
        },
    },
    plugins: [],
}
