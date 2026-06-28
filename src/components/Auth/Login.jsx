import React, { useState } from 'react'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is", email);
        console.log("password is", password)
        
        setemail('')
        setPassword('')
    }
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'> 
            <form
            onSubmit={(e)=>{submitHandler(e)}}
             className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                required
                className=' outline-none bg-transparent border-2 text-xl border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className=' outline-none bg-transparent border-2 mt-3 text-xl border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='text-white mt-5 outline-none border-none text-xl bg-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400' >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login