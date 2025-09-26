import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterFarmer = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();

     const handleSubmit = (e) => {
          e.preventDefault();
          // Dummy register
          localStorage.setItem('user', JSON.stringify({ role: 'farmer', email }));
          alert('Dummy Registration Successful! Logged in as Farmer.');
          navigate('/dashboard');
     };

     return (
          <div className="flex flex-col min-h-screen">
               <Header />
               <section className="flex-grow py-12 px-6">
                    <h2 className="text-3xl font-bold text-center mb-6">Register as Farmer</h2>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                         <input
                              type="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full mb-4 p-2 border rounded"
                              required
                         />
                         <input
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="w-full mb-4 p-2 border rounded"
                              required
                         />
                         <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
                    </form>
               </section>
               <Footer />
          </div>
     );
};

export default RegisterFarmer;