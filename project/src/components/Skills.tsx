import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'Python',
      level: 90,
      color: 'from-yellow-400 to-yellow-600',
      icon: '🐍',
    },
    {
      name: 'C',
      level: 75,
      color: 'from-blue-400 to-blue-600',
      icon: '⚡',
    },
    {
      name: 'C++',
      level: 80,
      color: 'from-purple-400 to-purple-600',
      icon: '🔧',
    },
    {
      name: 'Java',
      level: 70,
      color: 'from-red-400 to-red-600',
      icon: '☕',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Programming languages I'm proficient in, with a focus on building robust and efficient solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideIn 1.5s ease-out ${index * 0.2}s both`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Algorithms', 'Software Engineering'].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;