import React, { useState } from 'react';
import logo from './../assets/images/logo.png'; 
import profileimg from './../assets/images/profile.png'; 
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './Headeritem';

function Header() {

  const [toggle,setToggle] =useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass
    },
    {
      name: "WATCH LIST",
      icon: HiPlus
    },
    {
      name: "ORIGINALS",
      icon: HiStar
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle
    },
    {
      name: "SERIES",
      icon: HiTv
    }
  ];

  return (
    <div className='flex items-center justify-between p-5'> 
      <div className='flex gap-8 items-center'>
        <img src={logo} alt="Logo" className='w-[80px] md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
        {menu.map((item, index) => (
          <HeaderItem key={index} name={item.name} Icon={item.icon} />
        ))}
        </div>
         <div className='flex md:hidden gap-5'>
        {menu.map((item, index) =>index<3&& (
          <HeaderItem name={''} Icon={item.icon} />
        ))}
        </div>
         <div className='md:hidden' onClick={() => setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
         {toggle ? <div className='absolute mt-3 bg-[#040714] border-[1px] p-3 border-green-700'>
             {menu.map((item, index) =>index>2&& (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
          </div> :null}
        </div>
      </div>
      <img src={profileimg} alt="Profile" className='w-[40px] rounded-full' />
    </div>
  );
}

export default Header;
