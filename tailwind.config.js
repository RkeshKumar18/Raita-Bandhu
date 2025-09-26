module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  darkMode: 'class',  
  theme: {
    extend: {
      // Optional: Add custom colors for dark/light
      colors: {
        primary: {
          light: '#22c55e',  
          dark: '#15803d',   
        },
      },
    },
  },
  plugins: [],
};