import React, { useState,useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible]=useState(false);
    const {setShowSearch}=useContext(ShopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium '>
        <Link to='/'><img src={assets.logo} alt=""  className='w-36 '/></Link>

        <ul className='hidden sm:flex gap-5 text-sm  text-gray-700 text-xl'>
            <NavLink to='/' className='flex flex-col items-center gp-1 '>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'  />
            </NavLink>
            <NavLink to='/Collection' className='flex flex-col items-center gp-1 '>
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'  />
            </NavLink>
            <NavLink to='/About' className='flex flex-col items-center gp-1 '>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'  />
            </NavLink>
            <NavLink to='/Contact' className='flex flex-col items-center gp-1 '>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'  />
            </NavLink>

        </ul>

        <div className="flex items-center gap-6 border">
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className="group relative border">
                <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 border' >
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded border" >
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Orders</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-5 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
            </Link>
            <img src={assets.menu_icon} onClick={()=>setVisible((p)=>(!p))} className='w-5 cursor-pointer sm:hidden' alt="" />

            <div className={`absolute top-0 right-0   bottom-0  overflow-hidden bg-white  transition-all duration-800 ${visible ? 'w-full':'w-0'} border `}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={()=>setVisible((p)=>(!p))} className="flex items-center gap-4 p-3 border ">
                        <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180 cursor-pointer" />
                        <p>Back</p>
                    </div>
                  <NavLink onClick={()=>{setVisible((p)=>(!p))}} to='/' className='py-2 pl-6 border-b'>HOME</NavLink>
                  <NavLink onClick={()=>{setVisible((p)=>(!p))}} to='/Collection'  className='py-2 pl-6 border-b'>COLLECTION</NavLink>
                  <NavLink onClick={()=>{setVisible((p)=>(!p))}} to='/About' className='py-2 pl-6 border-b'>ABOUT</NavLink>
                  <NavLink onClick={()=>{setVisible((p)=>(!p))}} to='/Contact' className='py-2 pl-6 border-b'>CONTACT</NavLink>

                </div>
            </div>
        </div>

       
        
      
    </div>
  )
}

export default Navbar
