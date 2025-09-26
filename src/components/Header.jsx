// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';  // Import context
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';  // Icons

const Header = () => {
     const { theme, toggleTheme } = useContext(ThemeContext);
     const navigate = useNavigate();
     const isLoggedIn = !!localStorage.getItem('user');

     const handleLogout = () => {
          localStorage.removeItem('user');
          navigate('/');
     };

     return (
          <header className="bg-green-600 text-white py-4 px-6 flex justify-between items-center dark:bg-gray-800">
               <Link to="/" className="text-2xl font-bold">Raita Bandhu</Link>
               <nav className="space-x-4 flex items-center">
                    {isLoggedIn ? (
                         <>
                              <Link to="/dashboard" className="px-4 py-2">Dashboard</Link>
                              <button onClick={handleLogout} className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 dark:bg-gray-700 dark:text-white">Logout</button>
                         </>
                    ) : (
                         <>
                              <Link to="/register-farmer" className="px-4 py-2">Register as Farmer</Link>
                              <Link to="/register-company" className="px-4 py-2">Register as Company</Link>
                              <button onClick={() => alert('Dummy Login: Use register pages for now.')} className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 dark:bg-gray-700 dark:text-white">Login</button>
                         </>
                    )}
                    <Link to="/contact" className="px-4 py-2">Contact</Link>
                    {/* Toggle Button */}
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                         {theme === 'dark' ? (
                              <SunIcon className="h-6 w-6 text-yellow-400" />
                         ) : (
                              <MoonIcon className="h-6 w-6 text-gray-800" />
                         )}
                    </button>
               </nav>
          </header>
     );
};

export default Header;