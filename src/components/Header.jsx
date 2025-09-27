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
          navigate('/register-farmer');
     };

     return (
          <header className="bg-green-600 fixed w-full text-white py-4 px-6 flex justify-between items-center dark:bg-gray-800">
               <Link to="/" className="text-2xl font-bold">Raita Bandhu</Link>
               <nav className="space-x-4 flex items-center">
                    {isLoggedIn ? (
                         <>
                              <Link to="/" className="px-4 py-2 hover:bg-gray-700 rounded">Home</Link>
                              <Link to="/dashboard" className="px-4 py-2 hover:bg-gray-700 rounded">Dashboard</Link>
                              <Link to="/contact" className="px-4 hover:bg-gray-700 py-2 rounded">Contact</Link>
                              <button onClick={handleLogout} className=" text-green-600 px-4 py-2 rounded hover:bg-gray-700 dark:bg-gray-800 dark:text-white cursor-pointer">Logout</button>

                         </>
                    ) : (
                         <>
                              <Link to="/register-farmer" className="px-4 py-2 hover:bg-gray-700 rounded">Login</Link>
                              {/* <Link to="/register-company" className="px-4 py-2 hover:bg-gray-700 rounded">Register as Company</Link> */}
                              {/* <button onClick={() => alert('Dummy Login: Use register pages for now.')} className=" text-green-600 px-4 py-2 rounded hover:bg-gray-700 dark:bg-gray-800 dark:text-white cursor-pointer">Login</button> */}
                         </>
                    )}

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