import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Hello, I'm Chakravarthy Rangadas
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-200">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in animation-delay-400">
            I build modern web applications with cutting-edge technologies.
            Specializing in both frontend and backend development to create
            seamless digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 animate-fade-in animation-delay-600">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold py-3 px-8 rounded-lg border border-gray-300 dark:border-gray-700 transition duration-300"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in animation-delay-800">
            <a
              href="https://github.com/rangadaschakravarthy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/rangadas-chakravarthy-7955a824a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:rangadaschakravarthy02@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;