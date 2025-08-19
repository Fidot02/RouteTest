import React, { use } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/NavMenu.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const NavMenu = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

 useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setIsLoggedIn(true);
    } else {
        setIsLoggedIn(false);
    }
 },[isLoggedIn]);

    const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
    window.location.reload(); // Reload the page to reflect the logout state
    }

  return (
    <nav className='nav-menu'>
    <NavLink to="/" className="left"> Home</NavLink>
    <NavLink to="/about" className="left"> About</NavLink>
    <NavLink to="/contact" className="left"> Contact</NavLink>
    {isLoggedIn ? (<button onClick={handleLogout}>LogOut</button>) : (<NavLink to="/login" className="login-link"><button>LogIn</button></NavLink>)}
    </nav>
  )
}

export default NavMenu