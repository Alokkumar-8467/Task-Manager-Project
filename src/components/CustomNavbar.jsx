"use client";

import UserContext from '@/context/userContext';
import Link from 'next/link';
import React from 'react'
import { useContext } from 'react';
import { logout } from '@/services/userService';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const CustomNavbar = () => {

    const context = useContext(UserContext);
    const router = useRouter();
    console.log(context);

    async function doLogout(){
        try {
            const result = await logout()
            console.log(result);
            context.setUser(undefined);
            router.push("/");
        } catch (error) {
            console.log(error);
            toast.error("Logout Error");
        }
    }

  return (
    <nav className="flex justify-between bg-blue-600 h-16 py-2 px-36 items-center">
        <div className='brand'>
            <h1 className='text-2xl font-semibold'>
               <a href='#!'>Work Manager</a>
            </h1>
        </div>
        <div>
            <ul className='flex space-x-4'>
                {
                    context.user && (
                        <>
                        <li>
                    <Link href='/' className='hover:text-blue-300'>Home</Link>
                </li>
                <li>
                    <Link href='/add-task' className='hover:text-blue-300'>Add Task</Link>
                </li>
                <li>
                    <Link href='/show-tasks'className='hover:text-blue-300'>Show Tasks</Link>
                </li>
                        </>
                    )
                } 
            </ul>
        </div>
        <div>
            <ul className='flex space-x-4'>
                { context.user && (
                    <>
                        <li>
                            <a href='#!'>{context.user.name}</a>
                        </li>
                        <li>
                            <button onClick={doLogout}>Logout</button>
                        </li>
                    </>
                )}
                { !context.user && (
                    <>
                        <li>
                            <a href='/login'>Login</a>
                            </li>
                        <li>
                            <a href='/signup'>Signup</a>
                        </li>
                    </>
                )}

            </ul>
        </div>
    </nav>
  )
}

export default CustomNavbar;