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
            },
        },
    },
    plugins: [],
}
