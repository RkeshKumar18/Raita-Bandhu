import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
     const [theme, setTheme] = useState(() => {
          // Load from localStorage or default to system preference
          if (localStorage.getItem('theme')) {
               return localStorage.getItem('theme');
          } else {
               return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
     });

     useEffect(() => {
          // Apply theme class to <html>
          if (theme === 'dark') {
               document.documentElement.classList.add('dark');
          } else {
               document.documentElement.classList.remove('dark');
          }
          localStorage.setItem('theme', theme);  // Persist
     }, [theme]);

     const toggleTheme = () => {
          setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
     };

     return (
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
               {children}
          </ThemeContext.Provider>
     );
};