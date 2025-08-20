import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold">Amaan Khan</span>
          </div>
          <p className="text-gray-300 mb-4">
            Passionate AI Developer • Machine Learning Enthusiast • Problem Solver
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>and lots of code</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} Amaan Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;