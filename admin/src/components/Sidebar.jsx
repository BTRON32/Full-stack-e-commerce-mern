import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
    <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
    {/* whenever any one clicks on this link, it will open /add  */}
     {/* add logic so that when we click here and go to add route, we should be able to highlight add items, for this we will use navlinks active property, active class defined in index.css  */}
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/add">
        <img className='w-5 h-5' src={assets.add_icon} alt="" />
        {/* by default it will be hidden and for medium and above screen size, we will add display block so it will be visible */}
        <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/list">
        <img className='w-5 h-5' src={assets.order_icon} alt="" />
        {/* by default it will be hidden and for medium and above screen size, we will add display block so it will be visible */}
        <p className='hidden md:block'>List Items</p>
        </NavLink>

         <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/orders">
        <img className='w-5 h-5' src={assets.order_icon} alt="" />
        {/* by default it will be hidden and for medium and above screen size, we will add display block so it will be visible */}
        <p className='hidden md:block'>Orders</p>

        </NavLink>
       
    </div>

    </div>
  )
}

export default Sidebar