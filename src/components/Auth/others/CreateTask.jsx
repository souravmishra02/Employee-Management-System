import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const CreateTask = () => {
  const [userData,setUserData] =  useContext(AuthContext)


  const [taskTitle, setTaskTitle] = useState('')
  const [taskdescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newtask, setNewTask] = useState({})




  const submitHandler = (e)=>{
    e.preventDefault()
    setNewTask({taskTitle,taskdescription,taskDate,category,active:false,newTask:true, failed:false, completed:false})

    const data = userData


    data.forEach(function(elem){
      if(assignTo == elem.first_name){
        elem.tasks.push(newtask)
        elem.task_summary.new= elem.task_summary.new+1

      }
    })
    setUserData(data)
    console.log(data)

    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDescription('')
    setTaskDate('')


  }
  return (
    <div className='bg-[#1c1c1c] rounded h-75'>
    <form onSubmit={(e)=>{
      submitHandler(e)

    }} 
    id = 'formum' className='flex flex-wrap items-start w-full  rounded-2xl  justify-between'>

        <div className='w-1/2 h-70'>
            <div>
            <h3 id='title1' className='text-xl text-gray-300 '>Task Title</h3>
        <input 
        value={taskTitle}
        onChange={(e)=>{
          setTaskTitle(e.target.value)
        }}
         id = 'task1' className='text-sm w-4/5 rounded outline-none bg-transparent border-[1px] text-white border-gray-400' type="text" placeholder='make a Ui Design'
         />
        </div>

        <div>
        <h3 id='title2' className='text-xl text-gray-300 '>Date</h3>
        <input 
           value={taskDate}
           onChange={(e)=>{
             setTaskDate(e.target.value)
           }}
        id='task2' className='text-sm w-4/5 rounded outline-none bg-transparent border-[1px] text-white border-gray-400' type="date" />
        </div>
        <div>

        <h3  id='title3' className='text-xl text-gray-300 '>Assign</h3>
        <input
           value={assignTo}
           onChange={(e)=>{
             setAssignTo(e.target.value)
           }} 
        id='task3'  className='text-sm w-4/5 rounded outline-none bg-transparent border-[1px] text-white border-gray-400' type="text" placeholder='Employee Name' />
        </div>

        <div>
              
        <h3  id='title4' className='text-xl text-gray-300 '>Categories</h3>
        <input 
           value={category}
           onChange={(e)=>{
             setCategory(e.target.value)
           }} 
        id='task4' className='text-sm w-4/5 rounded outline-none bg-transparent border-[1px] text-white border-gray-400' type="text " placeholder='Design, Dev etc' />
        </div>


        </div>
      

        <div className='w-2/5 flex flex-col items-start'>
        <h3  id='title5' className='text-xl text-gray-300 '>Description</h3>
        <textarea 
           value={taskdescription}
           onChange={(e)=>{
             setTaskDescription(e.target.value)
           }}
        className='text-white w-full h-44 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10" placeholder='Add the description of the Task'></textarea>
        <button id='button1' className='bg-emerald-500 hover:bg-emerald-600 rounded text-sm '>Create Task</button>
        </div>


      

    </form>
</div>
  )
}

export default CreateTask