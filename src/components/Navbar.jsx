import { Link } from 'react-router-dom'

function Navbar({ user }) {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">SkillSwap</Link>
          <div className="flex items-center space-x-4">
            <Link to="/matching" className="hover:text-indigo-200">Find Matches</Link>
            <Link to="/community" className="hover:text-indigo-200">Community</Link>
            <Link to="/profile" className="flex items-center space-x-2">
              <span className="hover:text-indigo-200">{user.name}</span>
              <span className="bg-indigo-500 px-2 py-1 rounded-full text-sm">
                {user.points} pts
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar