import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#30B94D",
                accent: "#4F92F7",
                white: "#F9F9F9",
                dark: {
                    100: "#E3E3E3", // light gray
                    700: "#686868", // granite gray
                    800: "#262626", // dark graphite
                    900: "#1F1F1F", // charcoal black
                    950: "#141414", // near black
                },
                red: "#E90516",
            },
            opacity: {
                30: "30",
            },
        },
    },

    plugins: [forms],
};
