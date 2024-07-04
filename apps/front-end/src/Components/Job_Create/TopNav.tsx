import React from 'react';
import { FaBell } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";

const TopNav = () => {
  return (
    <div className='hidden md:flex ml-2 h-[90px] w-full md:w-[1490px] bg-black rounded-[26px] text-white'>
      <div>
        <p className='text-[2rem] ml-4'>
          Xlancr
        </p>
        <p className='font-thin ml-4'>
          freelancr
        </p>
      </div>
      <div className='ml-auto flex items-center'>
        <FaBell className='size-[1.5rem] mx-4' />
        <CiFaceSmile className='size-[2rem] mx-4' />
        <p className='mx-4'>Name Goes Here</p>
      </div>
    </div>
  )
}

export default TopNav;
