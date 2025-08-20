import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              AK
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800">
              Amaan Khan
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Passionate about <span className="text-blue-600 font-semibold">Machine Learning</span> and <span className="text-purple-600 font-semibold">Problem Solving</span>
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Aspiring AI Developer building intelligent systems and exploring real-world applications of artificial intelligence
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/amaan-khan-788771291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/AmaanKhan0786135"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-800"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:amaank65107@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-red-600"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Down Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group animate-bounce"
          >
            <span>Learn More</span>
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;