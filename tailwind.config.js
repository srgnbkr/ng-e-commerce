/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
    darkMode: ['selector', '[class="app-dark"]'],
    content: ['./src/**/*.{html,ts,scss,css}', './index.html'],
    plugins: [PrimeUI],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        }
    }
};
// This configuration file sets up Tailwind CSS with PrimeUI and customizes the dark mode and screen breakpoints.
// It specifies the content paths to scan for class names and includes PrimeUI as a plugin for additional styles.
// The dark mode is activated based on a selector or a specific class, and the screen
