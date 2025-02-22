import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const NavBar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <Link to={'/'}><img className='sm:w-[max(20%,80px)]' src={assets.logo} alt="" /></Link>
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xm sm:text-sm'>Logout</button>
    </div>
  )
}

export default NavBar
