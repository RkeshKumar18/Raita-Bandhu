import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
     const problems = [
          { title: 'Low Profits / Unfair Pricing', description: 'Direct farmer-to-company trade ensures fair prices.' },
          { title: 'Lack of Transparency', description: 'Clear order requests, acceptance/rejection system, and dashboards.' },
          { title: 'Delayed Payments', description: 'Secure 50% advance payment before delivery.' },
          { title: 'Exploitation & Debt', description: 'Removes middlemen, reducing dependency and exploitation.' },
          { title: 'Limited Market Reach', description: 'Companies can search crops nationwide (Amazon-like search).' },
          { title: 'Post-Harvest Losses', description: 'Timely orders and delivery scheduling reduce wastage.' },
          { title: 'No Bargaining Power', description: 'Farmers decide to accept/reject orders on their terms.' },
          { title: 'No Market Insights', description: 'Farmer dashboard gives order/payment history for better planning.' },
     ];

     const features = [
          { title: 'Farmer-to-Market App Without Middlemen', description: 'Farmers upload crop details; companies search & order.' },
          { title: 'Self-Pickup or Delivery Options', description: 'Flexible logistics with partners and NGOs.' },
          { title: '50% Advance Payment', description: 'Secure payments on order acceptance.' },
          { title: 'Dashboards', description: 'Track orders, payments, and tracking.' },
          { title: 'Simple, Regional Language Interface', description: 'Supports local languages with tutorials.' },
          { title: 'Offline Mode', description: 'Automatic data synchronization.' },
          { title: 'Secure Payments & Reviews', description: 'Rating system to build trust.' },
          { title: 'Incentives', description: 'Discounts and loyalty rewards.' },
     ];

     const viability = [
          { title: 'Language Tutorials', description: 'Local language tutorials and farmer training programs.' },
          { title: 'Direct Market Access', description: 'Farmers selling directly to consumers.' },
          { title: 'Affordable Mobile App', description: 'Cost-effective technology for market access.' },
          { title: 'Smartphone Adoption', description: 'Increasing use of smartphones in rural areas.' },
          { title: 'Higher Income', description: 'Increased earnings for farmers through wider reach.' },
          { title: 'Logistics Partners', description: 'Partner with logistics companies and NGOs for delivery.' },
     ];

     const challenges = [
          { title: 'Platform Competition', description: 'Creates market navigation issues.' },
          { title: 'Logistics & Delivery', description: 'Affects input/output efficiency.' },
          { title: 'Trust & Fraud', description: 'Discourages digital transactions.' },
          { title: 'Internet Connectivity', description: 'Impairs access to information.' },
          { title: 'Digital Literacy', description: 'Limits technology adoption.' },
     ];

     return (
          <div className="flex flex-col min-h-screen">
               <Header />
               {/* Direct Hero */}
               <section className="bg-green-100 pt-35 py-18 px-6 text-center dark:bg-gray-900 dark:text-white">
                    <h1 className="text-4xl font-bold mb-4">Connect Farmers Directly to Companies</h1>
                    <p className="text-xl mb-6">Eliminate middlemen, get fair prices, and reduce losses. Start now!</p>
                    <div className="space-x-4">
                         <Link to="/register-farmer" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Get Started as Farmer</Link>
                         <Link to="/register-company" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Get Started as Company</Link>
                    </div>
               </section>

               {/* Problems Solved - Interactive Cards */}
               <section className="py-8 px-6 bg-white">
                    <h2 className="text-3xl font-bold text-center mb-6">How We Solve Farmers’ Problems</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                         {problems.map((problem, index) => (
                              <FeatureCard key={index} title={problem.title} description={problem.description} />
                         ))}
                    </div>
               </section>

               {/* Key Features */}
               <section className="py-8 px-6 bg-gray-100">
                    <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {features.map((feature, index) => (
                              <FeatureCard key={index} title={feature.title} description={feature.description} />
                         ))}
                    </div>
               </section>

               {/* Feasibility and Viability */}
               {/* <section className="py-8 px-6 bg-white">
                    <h2 className="text-3xl font-bold text-center mb-6">Feasibility and Viability</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                         {viability.map((item, index) => (
                              <FeatureCard key={index} title={item.title} description={item.description} />
                         ))}
                    </div>
               </section> */}

               {/* Challenges */}
               {/* <section className="py-8 px-6 bg-gray-100">
                    <h2 className="text-3xl font-bold text-center mb-6">Addressing Challenges</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {challenges.map((challenge, index) => (
                              <FeatureCard key={index} title={challenge.title} description={challenge.description} />
                         ))}
                    </div>
               </section> */}

               {/* CTA */}
               <section className="py-8 px-6 bg-green-600 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Raita Bandhu Today</h2>
                    <p className="text-xl mb-6">Empower your farming business.</p>
                    <Link to="/contact" className="bg-white text-green-600 px-6 py-3 rounded hover:bg-gray-100">Contact Us</Link>
               </section>

               <Footer />
          </div>
     );
};

export default Home;