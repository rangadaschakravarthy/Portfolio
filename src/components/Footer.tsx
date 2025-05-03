import React from 'react';
import { Github as GitHub, Linkedin, Mail} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-10 mb-10">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-3">
                <span className="text-blue-400">Dev</span>Portfolio
              </h2>
              <p className="text-gray-400 max-w-md">
                Building innovative web applications with a focus on user experience and performance.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center md:text-right">Connect With Me</h3>
              <div className="flex space-x-5">
                <a
                  href="https://github.com/rangadaschakravarthy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                  aria-label="GitHub"
                >
                  <GitHub />
                </a>
                <a
                  href="https://www.linkedin.com/in/rangadas-chakravarthy-7955a824a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="mailto:rangadaschakravarthy02@gmail.com"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                  aria-label="Email"
                >
                  <Mail />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} All rights reserved.
            </p>
            
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="#home" className="text-gray-400 hover:text-blue-400 text-sm transition duration-300">Home</a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 text-sm transition duration-300">About</a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 text-sm transition duration-300">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 text-sm transition duration-300">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 text-sm transition duration-300">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;