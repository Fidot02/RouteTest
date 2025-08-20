import React, { use } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/NavMenu.css'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'
import {toast} from 'react-toastify'



const NavMenu = () => {
    const navigate = useNavigate();
    const {logout, isLoggedIn} = useContext(AuthContext);
 
    

    const handleLogout = () => {
      const loadingToast = toast.loading('Logging out...');
      logout();
    toast.update(loadingToast, { render: 'Logged out...', type: 'success', isLoading: false, autoClose: 3000 });
    navigate('/login');
    }

  return (
    <nav className='nav-menu'>
    <div className='nav-links'>
       <NavLink to="/" className="left"> Home</NavLink>
       <NavLink to="/about" className="left"> About</NavLink>
       <NavLink to="/contact" className="left"> Contact</NavLink>
    </div>
    <div className='nav-auth'>
        {isLoggedIn ? (<button onClick={handleLogout}>LogOut</button>) : (<NavLink to="/login" className="login-link"><button>LogIn</button></NavLink>)}
    </div>
    </nav>
  )
}

export default NavMenu