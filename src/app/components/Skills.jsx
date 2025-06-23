import React from 'react'

const Skills = () => {
  return (
    <div>
        
        {/* Skills Section */}
        <div id="skills" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Skills</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Technologies I work with
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { name: 'JavaScript', icon: 'JS' },
                  { name: 'React', icon: '⚛️' },
                  { name: 'Node.js', icon: '⬢' },
                  { name: 'TypeScript', icon: 'TS' },
                  { name: 'Next.js', icon: 'λ' },
                  { name: 'Tailwind CSS', icon: '🎨' },
                  { name: 'MongoDB', icon: '🍃' },
                  { name: 'GraphQL', icon: '📊' },
                ].map((skill) => (
                  <div key={skill.name} className="col-span-1 flex flex-col text-center bg-gray-50 rounded-lg p-6">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h3 className="text-gray-900 text-lg font-medium">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Skills