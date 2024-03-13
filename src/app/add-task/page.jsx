"use client";

import ClipLoader from "react-spinners/ClipLoader";
import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'

const AddTaskPage = () => {

  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])

  return (
    <div>
      {
        loading ? 
        <ClipLoader color="blue"  loading={loading} size={40}/> : <AddTask/>
      }
      
    </div>
  )
}

export default AddTaskPage

// 