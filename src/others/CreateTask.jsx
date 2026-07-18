import React from 'react'
import { useState } from 'react'
import NewTask from '../components/TaskList/NewTask'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [date, setDate] = useState('')
    const [asignTo, setAsingnTO] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const [newTask, setNewTask] = useState({})
    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({taskTitle, description, date, category, active:false, newTask:true, failed:false, completed:false})
        
        const data = JSON.parse(localStorage.getItem('Employees'))
        
        data.forEach(function(elem){
            if(asignTo == elem.firstName){
                elem.tasks.push(newTask)
                console.log(elem)
            }
        })
        setTaskTitle('')
        setDate('')
        setAsingnTO('')
        setCategory('')
        setDescription('')
    }
  return (
        <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form
            onSubmit={(e)=>{submitHandler(e)}}
             className='flex flex-wrap w-full items-start justify-between '>
                <div className='w-1/2'>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                <input
                 value={taskTitle}
                 onChange={(e)=>{
                    setTaskTitle(e.target.value)
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                value={date}
                 onChange={(e)=>{
                    setDate(e.target.value)
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" />
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                <input 
                value={asignTo}
                 onChange={(e)=>{
                    setAsingnTO(e.target.value)
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='employee name' />
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                value={category}
                 onChange={(e)=>{
                    setCategory(e.target.value)
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='design, dev , etc' />
                </div>
                </div>

                <div className='w-1/2 flex flex-col items-start'>
                <h3 className='text-sm text-green-300 mb-0.5'>Description</h3>
                <textarea 
                value={description}
                 onChange={(e)=>{
                    setDescription(e.target.value)
                 }}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' name="" id="" cols='30' rows='10'></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full '>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask