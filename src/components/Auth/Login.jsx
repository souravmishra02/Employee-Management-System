import React, { useState } from 'react'

const Login = ({handelLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handelLogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex items-center h-screen w-screen justify-center'>
        <div className='border-2 rounded-2xl  border-emerald-600'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)

        }}
        className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
                
            }}
            
            required id='email' className='border-2 border-emerald-600 py-5 px-3 text-xl text-white outline-none bg-transparent rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
            <input 
            value={password} 
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            
            
            
            required id='pas' className='mt-6 border-2 border-emerald-600 py-4 px-3 text-xl  text-white outline-none bg-transparent rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
            <button id='but1' className='border-none bg-emerald-600 py-4 px-3 text-2xl text-white outline-none rounded-full'>Log in</button>
        </form>

        </div>
      
    </div>
  )
}

export default Login