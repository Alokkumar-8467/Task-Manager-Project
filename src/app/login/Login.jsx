"use client";
import { toast } from 'react-toastify';
import React, { useState } from 'react'
import Image from 'next/image'
import loginSvg from "../../assets/login.svg";
import { login } from '@/services/userService';
import { useRouter } from 'next/navigation';
import UserContext from '@/context/userContext';
import { useContext } from 'react';

const Login = () => {

  const router = useRouter();
  const context = useContext(UserContext);

    const [loginData , setLoginData] = useState({
        name:"",
        email:"",
        password:"",
    });

    const loginFormSubmitted= async (event)=>{
        event.preventDefault();
        console.log(loginData)
        if (loginData.name.trim() === "" || loginData.name == null || loginData.email.trim() === "" || loginData.email == null || loginData.password.trim() === "" || loginData.password == null  ){
            toast.warning("Name,Email & Password is required !!", {
              position: "top-center"
            });
            return;
          }

          try {
            const result = await login(loginData)
            console.log(result)
            toast.success("Login Success");
            
            // redirect to some selected page

            context.setUser(result.user);

            router.push("/profile/user");
          } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
              position:"top-center",
            });
          }
        };

        const resetForm = () => {
          setLoginData({
            name:"",
          email:"",
          password:"",
          about:"",
          profileURL:""
          })
        }

  return (
    <div className="grid grid-cols-2 gap-4 shadow-xl h-full w-full" >
        <div className="grid grid-cols-12 justify-center">
            <div className='col-span-6 col-start-6 py-20'>
                <div className='py-5 '>

                    <h1 className='text-3xl text-center'>Login Here</h1>
                    <form action='#!' className='mt-5' onSubmit={loginFormSubmitted}>

                        {/* For user login name */}

                        <div className="mt-3">
                            <label htmlFor="user_name" 
                            className='block text-sm font-medium mb-2 ps-3'>Name</label>
                            <input type='name' 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            id='user_name'
                            placeholder='Enter your user-name here'
                            name='user_name'
                            onChange={event => {
                              setLoginData({
                                ...loginData,
                                name:event.target.value,
                              });
                            }}
                            value={loginData.name}
                            />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="user_email" 
                            className='block text-sm font-medium mb-2 ps-3'>Email</label>
                            <input type='email' 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            id='user_email'
                            placeholder='Enter your email here'
                            name='user_email'
                            onChange={event => {
                              setLoginData({
                                ...loginData,
                                email:event.target.value,
                              });
                            }}
                            value={loginData.email}
                            />
                        </div>
                        {/* For user password */}
                        <div className="mt-3">
                            <label htmlFor="user_password" 
                            className='block text-sm font-medium mb-2 ps-3'>Password</label>
                            <input type='password' 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            id='user_password'
                            placeholder='Enter your password'
                            name='user_password'
                            onChange={event => {
                              setLoginData({
                                ...loginData,
                                password:event.target.value,
                              });
                            }}
                            value={loginData.password}
                            />
                        </div>
                        
                        <div className='mt-4 flex justify-center '>
                            <button className='bg-yellow-500 py-2 px-3 rounded-lg hover:bg-yellow-600'>Login</button>
                            <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-500 ms-3' onClick={resetForm}>Reset</button>
                        </div>

                    </form>

                    {/* {JSON.stringify(loginData)} */}
                   
                </div>
            </div>
        </div>
        
        <div className=' justify-center col-span-4 col-start-2 py-20'>
            <Image src={loginSvg} style={{width: "70%", alt:'Alok'}}
            alt='Alok' />
        </div>
        
    </div>
  )
}

export default Login