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
import Articles from './components/Articles'
import Doctors from './components/Doctors'
import DoctorPage from './pages/DoctorPage'
import ArticlePage from './pages/ArticlePage'
import Gallery from './components/Gallery'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext } from './context/AuthContext.jsx'
import { useContext } from 'react'

function AppLayout() {
  const location = useLocation();
  
  const authRoutes= ['/login', '/register'];
  const isAuthRoute = authRoutes.includes(location.pathname);
  const { isLoggedIn } = useContext(AuthContext);





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
        <Route path="/users" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Users /></ProtectedRoute>} />
       
       <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/articles" element={<Articles/>} />
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:id" element={<DoctorPage />} />
        <Route path="/articles/:id" element={<ArticlePage/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Route>
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
