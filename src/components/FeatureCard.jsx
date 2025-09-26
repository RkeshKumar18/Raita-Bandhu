import React from 'react';

const FeatureCard = ({ title, description }) => {
     return (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer dark:bg-gray-800 dark:text-gray-300">
               <h3 className="text-xl font-semibold mb-2">{title}</h3>
               <p className="text-gray-600">{description}</p>
          </div>
     );
};

export default FeatureCard;