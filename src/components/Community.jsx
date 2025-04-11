import { useState } from 'react'

function Community() {
  const [projects] = useState([
    {
      id: 1,
      title: 'Community Photography Exhibition',
      description: 'A virtual exhibition showcasing photos taken by our community members',
      skills: ['Photography', 'Digital Curation'],
      participants: 12,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Web Development Workshop Series',
      description: 'Weekly workshops teaching basics of web development',
      skills: ['HTML', 'CSS', 'JavaScript'],
      participants: 8,
      status: 'Upcoming'
    }
  ])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Community Projects</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Create Project
        </button>
      </div>

      <div className="grid gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                project.status === 'Active' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {project.participants} participants
              </span>
              <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-200">
                Join Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Community