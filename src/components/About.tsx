import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl">
                <img
                  src="/image.jpg"
                  alt="Developer portrait"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Aspiring Full Stack Developer passionate about building
                real-world applications
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I’m a final-year B.Tech student in Information Technology at
                Anurag University, driven by a deep interest in web development
                and modern software architecture. I enjoy working across both
                frontend and backend, using technologies like React.js, Node.js,
                and Flask to build responsive, scalable applications.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My focus is on writing clean, maintainable code and crafting
                intuitive user experiences. I actively work on personal and
                collaborative projects, constantly learning and applying new
                tools and frameworks to solve real-world problems creatively and
                efficiently.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Education
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    B.Tech in Information Technology
                    <br />
                    Anurag University, Hyderabad
                    <br />
                    Expected Graduation: 2026
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Malkajgiri
                    <br />
                    Hyderabad
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  Contact Me
                </a>
                <a
                  href="/resume_jp.pdf"
                  className="inline-flex items-center bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium py-2 px-6 rounded-lg border border-gray-300 dark:border-gray-700 transition duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
