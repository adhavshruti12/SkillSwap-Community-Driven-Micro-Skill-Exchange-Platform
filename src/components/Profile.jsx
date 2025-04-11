import { useState } from 'react'

function Profile({ user, setUser }) {
  const [newSkill, setNewSkill] = useState('')
  const [newLearning, setNewLearning] = useState('')

  const addSkill = (e) => {
    e.preventDefault()
    if (newSkill.trim()) {
      setUser({
        ...user,
        skills: [...user.skills, newSkill.trim()]
      })
      setNewSkill('')
    }
  }

  const addLearning = (e) => {
    e.preventDefault()
    if (newLearning.trim()) {
      setUser({
        ...user,
        learning: [...user.learning, newLearning.trim()]
      })
      setNewLearning('')
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Skills I Can Teach</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {user.skills.map((skill, index) => (
            <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <form onSubmit={addSkill} className="flex gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a new skill"
            className="flex-1 border rounded px-3 py-2"
          />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Add
          </button>
        </form>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Skills I Want to Learn</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {user.learning.map((skill, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <form onSubmit={addLearning} className="flex gap-2">
          <input
            type="text"
            value={newLearning}
            onChange={(e) => setNewLearning(e.target.value)}
            placeholder="Add a skill you want to learn"
            className="flex-1 border rounded px-3 py-2"
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add
          </button>
        </form>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Achievement Points: {user.points}</h3>
        <p className="text-gray-600">Keep earning points by teaching and learning new skills!</p>
      </div>
    </div>
  )
}

export default Profile