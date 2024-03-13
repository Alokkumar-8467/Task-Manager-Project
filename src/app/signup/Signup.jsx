"use client";
import { toast } from 'react-toastify';
import React, { useState } from 'react'
import signupSvg from "../../assets/signup.svg";
import Image from 'next/image';
import { signUp } from '@/services/userService';

const Signup = () => {

  const [data, setData ] = useState({
    name:"",
    email:"",
    password:"",
    about:"",
    profileURL:"https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"
  });

  const doSignup = async (event)=>{
    event.preventDefault();

    console.log(event)
    console.log(data)
    if (data.name.trim() === "" || data.name == null || data.email.trim() === "" || data.email == null || data.password.trim() === "" || data.password == null  ){
      toast.warning("Name,Email & Password is required !!", {
        position: "top-center"
      });
      return;
    }

    try {
    const result = await signUp(data)
    console.log(result)
    toast.success("User is registered",{
      position: 'top-center'
    });
    setData({
      name:"",
    email:"",
    password:"",
    about:"",
    profileURL:""
    })
    } catch (error) {
      console.log(error)
      toast.error("Signup Error !! User not registered " + error.response.data.message,{
        position: 'top-center'
      });
    }
    
  };

  const resetForm = () => {
    setData({
      name:"",
    email:"",
    password:"",
    about:"",
    profileURL:""
    })
  }
 
  return (
    <div className="grid grid-cols-2 gap-4 shadow-xl h-full w-full">
      <div >
        <div className="grid grid-cols-12 justify-center">
            <div className='col-span-10 col-start-6 py-5'>
                <div className='py-5 '>

                    <h1 className='text-3xl text-center'>Signup Here</h1>
                    <form action='#!' className='mt-5' onSubmit={doSignup}>

                        {/* For name */}
                          <div className="mt-3">
                            <label htmlFor="user_name" 
                            className='block text-sm font-medium mb-2 ps-3'>Username</label>
                            <input type='text' 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            id='user_name'
                            placeholder='Enter your name here'
                            name='user_name'
                            onChange={event => {
                              setData({
                                ...data,
                                name:event.target.value,
                              });
                            }}
                            value={data.name}
                            />
                          </div>

                          {/* For email */}
                          <div className="mt-3">
                            <label htmlFor="user_email" 
                            className='block text-sm font-medium mb-2 ps-3'>Email</label>
                            <input type='email' 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            id='user_email'
                            placeholder='Enter your email here'
                            name='user_email'
                            onChange={event => {
                              setData({
                                ...data,
                                email:event.target.value,
                              });
                            }}
                            value={data.email}/>
                        </div>

                          {/* For password */}
                          <div className="mt-3">
                            <label htmlFor="user_password" 
                            className='block text-sm font-medium mb-2 ps-3'>Password</label>
                            <input type='password' 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            id='user_password'
                            placeholder='Enter your password here'
                            name='user_password'
                            onChange={event => {
                              setData({
                                ...data,
                                password:event.target.value,
                              });
                            }}
                            value={data.password}/>
                        </div>

                          {/* For about */}
                          <div className="mt-3">
                            <label htmlFor="user_about" 
                            className='block text-sm font-medium mb-2 ps-3'>About</label>
                            <textarea 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            placeholder='Enter about your self' 
                            id='user_about'
                            rows={2}
                            name='user_about'
                            onChange={event => {
                              setData({
                                ...data,
                                about:event.target.value,
                              });
                            }}
                            value={data.about}
                            ></textarea>
                        </div>

                        <div className='mt-4 flex justify-center'>
                            <button type='submit' className='bg-yellow-400 py-2 px-3 rounded-lg hover:bg-yellow-500'>SignUp</button>
                            <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-500 ms-3'
                            onClick={resetForm}
                            type='button'
                            >Reset</button>
                        </div>

                        {/* {JSON.stringify(data)} */}

                    </form>
                </div>
            </div>
        </div>
      </div>

      <div className=' justify-center col-span-4 col-start-2 py-20'>
      <Image src={signupSvg} style={{width: "60%", alt:'Alok'}}
            alt='Alok' />
      </div>

    </div>
  )
}



export default Signup
// grid grid-cols-12 justify-center