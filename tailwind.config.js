/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        colors: {
            background: "#FAF8F5",
            mainColor: "#EEC65D",
            subColor: "#EF7F18",
            fontColor1: "#271F17",
            fontColor2: "#B3B0AC",
            fontColor3: "#AE7D43",
            white: "#FFFFFF",
            red: "#F84141",
        },
        extend: {
            fontFamily: {
                sans: ["Noto Sans KR", "sans-serif"],
            },
            fontSize: {
                // Bold
                "bold-10": ["10px", "1.2"],
                "bold-20": ["20px", "1.2"],
                "bold-24": ["24px", "1.2"],
                "bold-36": ["36px", "1.2"],
                "bold-48": ["48px", "1.2"],
                "bold-64": ["64px", "1.2"],
                "bold-96": ["96px", "1.2"],
                // Medium
                "medium-12": ["12px", "1.2"],
                "medium-15": ["15px", "1.2"],
                "medium-20": ["20px", "1.2"],
                "medium-96": ["96px", "1.2"],
                // Regular
                "regular-15": ["15px", "1.2"],
                "regular-16": ["16px", "1.2"],
            },
        },
    },
    plugins: [],
};
