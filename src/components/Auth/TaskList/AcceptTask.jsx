import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div className='flex-shrink-0 w-[300px] h-full bg-red-300 rounded-2xl'> 
    <div className='flex justify-between items-center'>
        <h3 id='high' className='bg-red-500 w-20 ml-5 text-sm text-white rounded-xl'> <span id='height'>{data.category}</span></h3>
        <h4 id='date' className='text-white'>{data.date}</h4>

    </div>
    <h2 id='video' className='mt-5 text-2xl text-white font-semibold'>{data.title}</h2>
    <p id='para' className='text-sm'>
      {data.description}
    </p>
    <div className='flex justify-between mt-4 '>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
    </div>
  )
}

export default AcceptTask