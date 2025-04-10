import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0 w-[300px] h-full bg-emerald-300 rounded-2xl'> 
    <div className='flex justify-between items-center'>
        <h3 id='high' className='bg-red-500 w-20 ml-5 text-sm text-white rounded-xl'> <span id='height'>High</span></h3>
        <h4 id='date' className='text-white'>20 Feb 2024</h4>

    </div>
    <h2 id='video' className='mt-5 text-2xl text-white font-semibold'>Make a YouTube video</h2>
    <p id='para' className='text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, architecto. Facilis laboriosam pariatur voluptatum similique!
    </p>
    <div className='mt-4 '>
        <button className='bg-blue-500'>Accept task</button>
        
    </div>


    </div>
  )
}

export default NewTask