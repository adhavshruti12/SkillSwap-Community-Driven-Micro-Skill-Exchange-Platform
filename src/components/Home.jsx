import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        Welcome to SkillSwap
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Exchange skills, grow together, and build a stronger community.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Share Your Skills</h2>
          <p className="text-gray-600 mb-4">
            Teach others what you're good at and earn points while making an impact.
          </p>
          <Link
            to="/profile"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Add Your Skills
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Learn Something New</h2>
          <p className="text-gray-600 mb-4">
            Find people who can teach you the skills you want to learn.
          </p>
          <Link
            to="/matching"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Find Teachers
          </Link>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">1</div>
            <h3 className="text-lg font-semibold mb-2">Create Your Profile</h3>
            <p className="text-gray-600">List your skills and what you want to learn</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">2</div>
            <h3 className="text-lg font-semibold mb-2">Find Matches</h3>
            <p className="text-gray-600">Connect with people who complement your skills</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">3</div>
            <h3 className="text-lg font-semibold mb-2">Start Learning</h3>
            <p className="text-gray-600">Schedule sessions and exchange knowledge</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home