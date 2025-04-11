import { useState } from 'react'

function SkillMatching({ user }) {
  const [matches] = useState([
    {
      id: 1,
      name: 'Alice Smith',
      skills: ['Power BI', 'Data Analysis'],
      learning: ['Video Editing'],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Bob Johnson',
      skills: ['Python', 'Machine Learning'],
      learning: ['Photography'],
      rating: 4.5
    }
  ])

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Skill Matches</h2>
      
      <div className="grid gap-6">
        {matches.map(match => (
          <div key={match.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{match.name}</h3>
                <div className="text-yellow-500 mt-1">
                  {'★'.repeat(Math.floor(match.rating))}
                  <span className="text-gray-400 ml-1">{match.rating}</span>
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Connect
              </button>
            </div>

            <div className="mt-4">
              <div className="mb-3">
                <h4 className="font-medium text-gray-700">Can teach you:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {match.skills.map((skill, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700">Wants to learn:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {match.learning.map((skill, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillMatching