"use client";
import React, { useState } from 'react'
import savetaskSvg from "../../assets/savetask.svg";
import Image from 'next/image';
import { addTask } from '@/services/taskServices';
import { toast } from 'react-toastify';


const AddTask = () => {
 
  const [task, setTask] = useState({
    title: "",
    content : "",
    status : "none",
    // this user is not fixed we changed it later
    userId : "65e9b2ef4ca45e12adf5cc76"
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task)
    console.table(task)
    try {
      const result = await addTask(task)
      console.log(result)
      toast.success("Your task is added !!",{
        position: "top-center"
      });

      setTask({
        title: "",
        content : "",
        status : "none",
      });
      

    } catch (error) {
      console.log(error);
      toast.error("Task not added !!",{
        position: "top-center"
      });
    }
  }
  // const taskClear = () => {
  //   toast.success("Task removed !!",{
  //     position: "top-center"
  //   });
  // }

  return (
    <div className="grid grid-cols-2 gap-4 shadow-xl p-10 " >
      <div className=' grid grid-cols-12 justify-center'>
        <div className=' col-span-10 col-start-6 p-5'>

          <h1 className='text-3xl flex justify-center'>Add your task here !!</h1>
          <form action="#!" onSubmit={handleAddTask}>
                    <div className='mt-4'>
                      <label 
                        htmlFor='task_title' 
                        className='block text-sm font-medium mb-2'>Title</label>
                      <input type='text' className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' id="task_title"
                      name = "task_title"
                      onChange={(event)=>{
                        setTask({
                          ...task,
                          title:event.target.value,
                        });
                      }}
                      value={task.title}
                      />
                    </div>

                    <div className='mt-4'>
                      <label 
                        htmlFor='task_content' 
                        className='block text-sm font-medium mb-2'>
                          Content
                      </label>
                      <textarea 
                      className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' id="task_content"
                      rows={3}
                      name = "task_content"
                      onChange={(event)=>{
                        setTask({
                          ...task,
                          content:event.target.value,
                        });
                      }}
                      value={task.content}
                      />
                    </div>

                    <div className='mt-4'>
                      <label 
                        htmlFor='task_status' 
                        className='block text-sm font-medium mb-2'>
                          Status
                      </label>
                      <select id='task_status' className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800'
                      name = "task_status"
                      onChange={(event)=>{
                        setTask({
                          ...task,
                          status:event.target.value,
                        });
                      }}
                      value={task.status}>
                      <option vlaue="none" disabled >---Select Status---</option>
                        <option vlaue="pending">Pending</option>
                        <option vlaue="complete">Complete</option>
                      </select>
                    </div>
                      <div className='mt-4 flex justify-center '>
                      <button className='bg-blue-500 py-2 px-3 rounded-lg hover:bg-blue-600'>Add Task</button>
                      <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-500 ms-3' >Clear Task</button>
                    </div>
                    {/* {
                      JSON.stringify(task)
                    } */}
          </form>
        </div>
      </div>
        
        
        <div className='justify-center col-span-4 col-start-2 py-20 '>
          <Image src={savetaskSvg} style={{width: "70%",alt:'Alok'}}
          alt='Alok' />
        </div>

    </div>
  )
}

export default AddTask;