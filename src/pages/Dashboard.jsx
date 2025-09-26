//(Dummy post - login page)
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
     const user = JSON.parse(localStorage.getItem('user')) || { role: 'unknown' };

     return (
          <div className="flex flex-col min-h-screen">
               <Header />
               <section className="flex-grow py-12 px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h2>
                    <p className="text-xl">Logged in as: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
                    <p>Email: {user.email}</p>
                    <p>This is a dummy dashboard. Add real features like crop listing or orders here.</p>
               </section>
               <Footer />
          </div>
     );
};

export default Dashboard;