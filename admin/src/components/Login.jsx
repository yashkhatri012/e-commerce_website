import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify';
const Login = ({settoken}) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const onSubmitHandler = async(e) => {
    try{
        e.preventDefault();
        const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
        if (response.data.success) {
          settoken(response.data.token)
        } else{
            toast.error(response.data.message)
        }
    } catch(error){
        console.log(error)
        toast.error(error.message)
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>  
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p>Email Address</p>
            <input onChange={(e)=> setemail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border-gray-300 outline-none' type="email" placeholder='your@gmail.com'  required/>
          </div>
          <div className='mb-3 min-w-72'>
            <p>Password</p>
            <input onChange={(e)=> setpassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border-gray-300 outline-none' type="password" placeholder='Enter your Password'  required/>
          </div>
          <button className='mt-2 w-full  py-2 px-4 rounded-md text-white bg-black' type='submit'> Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
