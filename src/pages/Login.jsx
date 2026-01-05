 import React, { useState }  from 'react'
 import {Link} from 'react-router-dom'
 
 const Login = () => {
    const [email , SetEmail] = useState('');
    const [password , setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login:",{email,password});
        alert("Logine functionality will be added later!");
    };
   return (
     <div className='min-h-screen flex items-center justify-center bg-[#f5efff] px-4'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
            <h2 className='text-2xl font-bold text-center mb-6 text-[#593c8f]'>
                Login to career hub
            </h2>
            <form onSubmit={handleLogin} className='space-y-4'>
                <input
                 type='password'
                 placeholder='Email address'
                 required value={email}
                 onChange={(e)=> SetEmail(e.target.value)}
                 className='w-full px-4 py-2 border rounded focus:outline-none'
                />

                <input
                type='password'
                placeholder='password'
                required value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full  px-4 py-2 border rounded focus:outline-none'
                />

                <button type='submit'
                className='w-full py-2 bg-[#5938cf] text-white rounded hover:bg-[#4b2f7a]'
                >
                Login
                </button>
            </form>

            <p className='text-center text-gray-600 mt-4'>
                Don't have an account? {' '}
                <Link to = "/register"
                className='text-[#593c8f] font-medium hover:underline'>
                    Register
                </Link>
            </p>

        </div>

     </div>
   );
 };
 
 export default Login;