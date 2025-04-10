import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const AllTask = () => {
   const [userData,setUserData] =  useContext(AuthContext)

  return (
    <div id='task7' className='bg-[#1c1c1c] rounded h-75'> 
        <div id='task8' className='bg-red-400 flex justify-between'>
            <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
            <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
            <h4 className='w-1/5 text-lg font-medium'>Active Task</h4>
            <h4 className='w-1/5 text-lg font-medium'>Completed</h4>
            <h4 className='w-1/5 text-lg font-medium'>Failed Task</h4>

        </div>

       <div className=' h-60 overflow-auto'>   
       {userData.map(function(elem,idx){

return  <div key={idx} id='task8' className='border-2 border-emerald-700 flex justify-between'>
<h2 className='w-1/5 text-white text-lg font-medium'>{elem.first_name}</h2>
<h3 className='w-1/5 text-blue-400 text-xl'>{elem.task_summary.new}</h3>
<h4 className='w-1/5 text-yellow-400 text-xl'>{elem.task_summary.active}</h4>
<h4 className='w-1/5 text-white text-xl'>{elem.task_summary.completed}</h4>
<h4 className='w-1/5 text-red-700 text-xl'>{elem.task_summary.failed}</h4> 

</div>
})}
       </div>

    </div>
  )
}

export default AllTask


// here we have to give height h-70
// and we have to do  overflow-auto