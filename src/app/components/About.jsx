import React from 'react'

const About = () => {
  return (
    <div>
         {/* About Section */}
        <div id="about" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A little about myself
              </p>
            </div>

            <div className="mt-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <img className="rounded-full h-48 w-48 mx-auto" src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Profile" />
                </div>
                <div className="md:w-2/3 md:pl-12">
                  <p className="text-lg text-gray-500 mb-4">
                    Im a passionate Full Stack Developer with 5+ years of experience building web applications. I specialize in JavaScript technologies across the whole stack (React.js, Node.js, Express, MongoDB).
                  </p>
                  <p className="text-lg text-gray-500 mb-4">
                    My approach combines technical expertise with an eye for design to create applications that are both functional and delightful to use.
                  </p>
                  <p className="text-lg text-gray-500">
                    When Im not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default About