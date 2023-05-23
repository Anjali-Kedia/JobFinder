import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import { SlClose } from "react-icons/sl";
import { BsHouseDoor } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";



const Search = () => {
  return (
    <div className='searchdiv grid gap-10 bg-greyIsh rounded-[5px] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounded-[2px] gap-[15px]
        bg-white p-5 shadow-lg shadow-greIsh-700'>

          <div className='flex gap-2 items-center'>
          <BiSearchAlt2 className='icon text-[25px]'/>
            <input type = "text" className='bg-transparent text-blue-700 
            focus:outline-none w-[100%]' placeholder='Search for jobs'>
            </input>
            <SlClose className='icon text-[20px] text-[#a5a6a6] hover:text-textColor '/>
          </div>
          
          <div className='flex gap-2 items-center'>
          <BsHouseDoor className='icon text-[25px]'/>
            <input type = "text" className='bg-transparent text-blue-700 
            focus:outline-none w-[100%]' placeholder='Search by company'>
            </input>
            <SlClose className='icon text-[20px] text-[#a5a6a6] hover:text-textColor '/>
          </div>
          
          <div className='flex gap-2 items-center'>
          <MdOutlineLocationOn className='icon text-[25px]'/>
            <input type = "text" className='bg-transparent text-blue-700 
            focus:outline-none w-[100%]' placeholder='Search by location'>
            </input>
            <SlClose className='icon text-[20px] text-[#a5a6a6] hover:text-textColor '/>
          </div>

          <button className='bg-blueColor h-full p-5 rounded-[4px] text-white 
          cursor-pointer hover:bg-blue-300'> Search </button>
        </div>
        



        
      </form>

      <div className='secondDiv flex justify-center items-center rounded-[2px] gap-[10px] '>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="relevance" className='text-[#808080] font-semibold text-[15px]'>
          Sort By:
          </label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>

          </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="type" className='text-[#808080] font-semibold text-[15px]'>
          Type:
          </label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part time</option>

          </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="level" className='text-[#808080] font-semibold text-[15px]'>
          Level:
          </label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advanced</option>

          </select>
        </div>
        <span className='text-[#a1a1a1] cursor-pointer]'>Clear all</span>
      </div>
    </div>
  )
}

export default Search

