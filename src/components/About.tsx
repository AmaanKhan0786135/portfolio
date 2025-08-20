import React from 'react';
import { Brain, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am passionate about Machine Learning and Problem Solving, with the goal of becoming a skilled AI Developer. 
              I enjoy building intelligent systems and exploring real-world applications of AI.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in technology is driven by curiosity and a desire to create solutions that make a positive impact. 
              I'm constantly learning and adapting to new technologies and methodologies in the rapidly evolving field of artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Machine Learning Enthusiast</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">AI Developer</span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <Brain className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Machine Learning</h3>
              </div>
              <p className="text-gray-600">Building intelligent systems that learn from data and make predictions</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <Code className="text-purple-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Problem Solving</h3>
              </div>
              <p className="text-gray-600">Analyzing complex challenges and developing innovative solutions</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <Target className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">AI Development</h3>
              </div>
              <p className="text-gray-600">Creating real-world applications of artificial intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;