import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div id='task' className='mt-10 flex justify-between gap-5 screen'>
        <div id='div1' className=' w-[45%] bg-blue-300 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{data.task_summary.new}</h2>
            <h3 className='text-4xl font-semibold'>New Task</h3>
        </div>
        <div id='div1' className=' w-[45%] bg-green-300 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{data.task_summary.completed}</h2>
            <h3 className='text-4xl font-semibold'>Completed Task</h3>
        </div>
        <div id='div1' className=' w-[45%] bg-yellow-300 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{data.task_summary.active}</h2>
            <h3 className='text-4xl font-semibold'>Active Task</h3>
        </div>
        <div id='div1' className=' w-[45%] bg-red-300 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{data.task_summary.failed}</h2>
            <h3 className='text-4xl font-semibold'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers