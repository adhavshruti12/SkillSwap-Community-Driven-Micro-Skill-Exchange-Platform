import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import SkillMatching from './components/SkillMatching'
import Community from './components/Community'

function App() {
  const [user, setUser] = useState({
    id: '1',
    name: 'John Doe',
    skills: ['Video Editing', 'Photography'],
    learning: ['Power BI', 'Python'],
    points: 150
  })

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar user={user} />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/matching" element={<SkillMatching user={user} />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App