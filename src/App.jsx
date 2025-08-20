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
import Register from './components/Register'
import Users from './components/Users'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom'

function AppLayout() {
  const location = useLocation();
  
  const authRoutes= ['/login', '/register'];
  const isAuthRoute = authRoutes.includes(location.pathname);





  return (
    <>
      {!isAuthRoute && <NavMenu />}
      <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <ToastContainer position='top-right' autoClose={3000}/>
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}
export default App
