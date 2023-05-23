import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer  p-[5rem] grid grid-cols-5  m-auto items-start bg-blueColor mb-4 rounded-[5px] gap-8 justify-center'>
      <div>
        <div className='logoDiv '>
          <h1 className='logo text-white text-[20px] pb-[1.5rem]'>
            <strong>Find</strong>JOBS
          </h1>
        </div>

            <p className='text-white pb-[10px] opacity-70 leading-6'>
              Lorem , adipisicing elitllat accusntur fugiat! Quas ab inventore consequatur laboriosam earum!
            </p>
        
      </div>
      
        <div className='grid '>
          <span className='divTitle  text-white text-[18px] pb-[1.5rem] font-semibold'>
            Company
          </span>
          <div className='grid gap-3'>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>

          </div>
        </div>
        
        <div className='grid '>
          <span className='divTitle  text-white text-[18px] pb-[1.5rem] font-semibold'>
            Resources
          </span>
          <div className='grid gap-3'>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>

          </div>
        </div>

        <div className='grid '>
          <span className='divTitle  text-white text-[18px] pb-[1.5rem] font-semibold'>
            Support
          </span>
          <div className='grid gap-3'>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>

          </div>
        </div>

        <div className='grid '>
          <span className='divTitle  text-white text-[18px] pb-[1.5rem] font-semibold'>
            Contact Info
          </span>
          <div >
            <small className='text-[14px] text-white'>
              abc123@gmail.com
            </small>
            <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <AiFillLinkedin className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            </div>
            
          </div>
        </div>
      
      
    </div>
  )
}

export default Footer
