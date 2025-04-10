import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-[300px] h-full bg-amber-300 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h3 id='high' className='bg-red-500 w-20 ml-5 text-sm text-white rounded-xl'> <span id='height'>{data.category}</span></h3>
                <h4 id='date' className='text-white'>{data.date}</h4>

            </div>
            <h2 id='video' className='mt-5 text-2xl text-white font-semibold'>{data.title}</h2>
            <p id='para' className='text-sm'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button className='bg-white'>Completed Task</button>
            </div>
            </div>
  )
}

export default CompleteTask