import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NavMenu from './components/NavMenu'
import LogIn from './components/LogIn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <NavMenu />
      <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
