import React from 'react';
import { Plus, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This section will showcase my projects. Stay tuned for amazing AI and ML projects!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Project Cards */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Plus className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Project {index}</h3>
                <p className="text-gray-500 mb-4">
                  Exciting project coming soon! This will feature cutting-edge AI and ML implementations.
                </p>
              </div>
              
              <div className="flex justify-center space-x-3">
                <button className="px-4 py-2 bg-gray-200 text-gray-400 rounded-lg flex items-center space-x-2 cursor-not-allowed">
                  <Github size={16} />
                  <span>Code</span>
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-400 rounded-lg flex items-center space-x-2 cursor-not-allowed">
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">🚧 Under Construction</h3>
            <p className="text-blue-100 mb-4">
              I'm currently working on several exciting projects involving machine learning, artificial intelligence, and problem-solving applications.
            </p>
            <p className="text-blue-100">
              Check back soon to see my latest work in action!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;