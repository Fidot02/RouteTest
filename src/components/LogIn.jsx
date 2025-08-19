import React from 'react'
import '../assets/css/Login.css'
import axios from '../api/http'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import toast,{Toaster} from 'react-hot-toast'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const handleSubmit =(e) => {
    e.preventDefault();
    axios.post('/api/Auth/login',{username: email, password :password, email: email})
    .then((res) => {
        console.log(res.data);
        if (res.data.data.token) {
            localStorage.setItem('token', res.data.data.token);
            // alert('Login successful');
            toast.success('Login successful', {onClose: () => navigate('/')});
           
            
        } else {
            toast.error('Login failed, please check your credentials');
        }
    })
    .catch((error) => {
        console.error('There was an error logging in!', error);
        toast.error('Login failed, please check your credentials');
    })}
  return (
    <>
    <h2>LogIn</h2>
    <div className='container'>
        <form onSubmit={handleSubmit} className='form'>
            <div className="input-field">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
            </div>
            <div className="input-field">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            </div>
            <div className="btn-container">
                <button type='submit' className='btn'>LogIn</button>
            </div>
        </form>
    </div>

    <ToastContainer position='top-right' autoClose={3000}/>
    </>

  )
}

export default LogIn