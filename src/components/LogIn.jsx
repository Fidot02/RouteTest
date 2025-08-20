import React from 'react'
import '../assets/css/Login.css'
import axios from '../api/http'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import{ AuthContext} from '../context/AuthContext.jsx'
//import toast,{Toaster} from 'react-hot-toast'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleSubmit =(e) => {
    e.preventDefault();
    //toast.info('Logging in...'); 
    const loadingToast = toast.loading('Logging in...'); 
    axios.post('/api/Auth/login',{username: email, password :password, email: email})
    .then((res) => {
        console.log(res.data);
        if (res.data.data.token) {
            // alert('Login successful');
           // toast.success('Login successful');
           login({name: res.data.data.name, profileImageUrl: res.data.data.profileImageUrl, role: res.data.data.role}, res.data.data.token);
           toast.update(loadingToast, { render: 'Login successful', type: 'success', isLoading: false, autoClose: 3000 });
            navigate('/');
            
        } else {
            //toast.error('Login failed, please check your credentials');
            toast.update(loadingToast, { render: 'Login failed, please check your credentials', type: 'error', isLoading: false, autoClose: 3000 });
        }
    })
    .catch((error) => {
        console.error('There was an error logging in!', error);
       // toast.error('Login failed, please check your credentials');
       toast.update(loadingToast, { render: 'Login failed, please check your credentials', type: 'error', isLoading: false, autoClose: 3000});
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

    
    </>

  )
}

export default LogIn