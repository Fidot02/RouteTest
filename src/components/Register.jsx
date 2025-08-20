import React from 'react'
import{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from '../api/http'
import '../assets/css/Login.css'



const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate();
 
    const handleSubmit =(e) => {
    e.preventDefault();
    
    const loadingToast = toast.loading('Registration in progress...'); 
    axios.post('/api/Auth/register',{name: name, password: password, email: email})
    .then((res) => {
        toast.update(loadingToast, { render: 'Registration successful', type: 'success', isLoading: false, autoClose: 3000 });
        navigate('/login');
       
    })
    .catch((error) => {
        console.error('There was an error in registration', error);
       // toast.error('Login failed, please check your credentials');
       toast.update(loadingToast, { render: 'Registration failed, Please contact Administrator', type: 'error', isLoading: false, autoClose: 3000});
    })}
 
 
 
 
    return (
     <>
    <h2>Register</h2>
    <div className='container'>
        <form onSubmit={handleSubmit} className='form'>
           <div className="input-field">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
            </div>
            <div className="input-field">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
            </div>
            <div className="input-field">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            </div>
            <div className="btn-container">
                <button type='submit' className='btn'>Register</button>
            </div>
        </form>
    </div>

    
    </>

    
  )
}

export default Register