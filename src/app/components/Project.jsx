import React from 'react'

const Project = () => {
  return (
    <div>
         {/* Projects Section */}
        <div id="projects" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Some of my recent work
              </p>
            </div>

            <div className="mt-10 space-y-12">
              {[
                {
                  name: 'E-commerce Platform',
                  description: 'A full-featured online store with product listings, cart functionality, and payment processing.',
                  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
                  link: '#'
                },
                {
                  name: 'Task Management App',
                  description: 'A productivity application for teams to collaborate on projects and track tasks.',
                  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
                  link: '#'
                },
                {
                  name: 'Weather Dashboard',
                  description: 'Real-time weather information with 5-day forecasts and location search.',
                  technologies: ['React', 'OpenWeather API', 'Chart.js'],
                  link: '#'
                }
              ].map((project) => (
                <div key={project.name} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <a href={project.link} className="text-indigo-600 hover:text-indigo-900 font-medium">
                        View project →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project