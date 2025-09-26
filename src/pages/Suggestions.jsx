import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Suggestions = () => {
     const form = useRef();
     const [isSuccess, setIsSuccess] = useState(false);

     const sendEmail = (e) => {
          e.preventDefault();

          // Replace with your EmailJS credentials
          emailjs
               .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
               .then(
                    (result) => {
                         console.log(result.text);
                         setIsSuccess(true);
                    },
                    (error) => {
                         console.log(error.text);
                         alert('Failed to Send Suggestion.');
                    }
               );
     };

     return (
          <div className="flex flex-col min-h-screen">
               <Header />
               <h2 className="text-3xl font-bold text-center mb-6 dark:text-slate-600">Share Your Suggestions</h2>
               <p className="text-center mb-8 text-gray-600 dark:text-gray-800">
                    Intrested to improve Raita Bandhu! Share your ideas or express interest in contributing to our mission.
               </p>
               <section className="flex-grow py-12 px-6">

                    {!isSuccess ? (
                         <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md dark:bg-gray-800">
                              <input
                                   type="text"
                                   name="user_name"
                                   placeholder="Your Name"
                                   className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                   required
                              />
                              <input
                                   type="email"
                                   name="user_email"
                                   placeholder="Your Email"
                                   className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                   required
                              />
                              <select
                                   name="user_role"
                                   className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                   required
                              >
                                   <option value="" disabled selected>
                                        Select Your Role
                                   </option>
                                   <option value="Farmer">Farmer</option>
                                   <option value="Company">Company</option>
                                   <option value="Other">Other</option>
                              </select>
                              <textarea
                                   name="suggestion"
                                   placeholder="Your Suggestions for Raita Bandhu"
                                   className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                   rows="4"
                                   required
                              />
                              <label className="flex items-center mb-4">
                                   <input
                                        type="checkbox"
                                        name="interested_in_contributing"
                                        className="mr-2 dark:bg-gray-700 dark:border-gray-600"
                                   />
                                   <span className="text-gray-600 dark:text-gray-300">I'm interested in contributing to Raita Bandhu</span>
                              </label>
                              <button
                                   type="submit"
                                   className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900"
                              >
                                   Submit Suggestion
                              </button>
                         </form>
                    ) : (
                         <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, type: 'spring' }}
                              className="max-w-md mx-auto bg-green-100 p-8 rounded-lg shadow-md text-center dark:bg-gray-900 dark:text-white"
                         >
                              <motion.svg
                                   className="w-16 h-16 mx-auto mb-4 text-green-600 dark:text-green-400"
                                   fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg"
                                   initial={{ pathLength: 0 }}
                                   animate={{ pathLength: 1 }}
                                   transition={{ duration: 1, ease: 'easeInOut' }}
                              >
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </motion.svg>
                              <h3 className="text-2xl font-bold mb-2">Suggestion Submitted!</h3>
                              <p>Thank you for your feedback. If you expressed interest in contributing, we'll reach out soon!</p>
                         </motion.div>
                    )}
               </section>
               <Footer />
          </div>
     );
};

export default Suggestions;