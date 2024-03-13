import UserContext from '@/context/userContext';
import { deleteTask } from '@/services/taskServices';
import React, { useContext } from 'react'
import { RxCross1 } from "react-icons/rx";

const Task = ({ task, deleteTaskParent }) => {
    const {user} = useContext(UserContext);

    function deleteTask(taskId){
      deleteTaskParent(taskId);
    }

  return (
    <div className={`bg-slate-500 shadow-lg mt-2 rounded-md `}>
        <div className='p-5'>
            <div className='flex justify-between'>
              <h1 className='text-2xl font-semibold text-white'>{task.title}</h1>
              <span onClick={()=>{
                deleteTask(task._id)
              }} className='text-white shadow-lg bg-slate-900 rounded-full w-6 h-6 flex justify-center items-center cursor-pointer hover:bg-slate-700 '>
              <RxCross1 />
              </span>
            </div>
            <p className=' font-normal text-white'>{task.content}</p>
            <div className='flex justify-between mt-3'>
            <p className='text-right text-white'>Status: <span className='font-bold'>{task.status}</span></p>
            <p className='text-right text-white'>Author: <span className='font-bold'>{user?.name}</span></p>
          </div>
        </div>
    </div>
  );
};

export default Task