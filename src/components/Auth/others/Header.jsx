import React, { useState } from 'react'
import { setLocalStrorage } from '../../../utils/LocalStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('admin')
  // }else{
  //   setUsername(data.first_name)
  // }
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()

  }
  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl font-semibold'> 👋🏻</span></h1>
        <button onClick={logOutUser} id='headbut' className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header