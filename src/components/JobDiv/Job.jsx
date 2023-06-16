import React from 'react'
import {BiTimeFive} from 'react-icons/bi'

//For all the jobs, we are going to use high order array method called Map
//Create a list of all jobs into an array called Data

const Data = [
  {
    id:1,
    //image
    title:'Web Developer',
    time: 'Now',
    location:'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur  ratione minima dolor ea odit quas!',
    company: 'Novac Linus Co.'
  },
  {
    id:2,
    //image
    title:'UI/UX Designer',
    time: '14hrs',
    location:'NewYork',
    desc: 'Lorem ipsum dolor sit amet consectetur  ratione minima dolor ea odit quas!',
    company: 'Liquid Accessments'
  },
  {
    id:3,
    //image
    title:'Software Eng',
    time: '10hrs',
    location:'Australia',
    desc: 'Lorem ipsum dolor sit amet consectetur  ratione minima dolor ea odit quas!',
    company: 'Web Tech Agency'
  },
  {
    id:4,
    //image
    title:'Ui designer',
    time: '10hrs',
    location:'Germany',
    desc: 'Lorem ipsum dolor sit amet consectetur  ratione minima dolor ea odit quas!',
    company: 'Government'
  },
  {
    id:5,
    //image
    title:'Product Designer',
    time: 'Now',
    location:'Manchester',
    desc: 'Lorem ipsum dolor sit amet consectetur  ratione minima dolor ea odit quas!',
    company: 'Newcastle'
  },
  {
    id:6,
    //image
    title:'Data Scientist',
    time: '2 Days',
    location:'Turkey',
    desc: 'Lorem ipsum dolor sit amet consectetur  ratione minima dolor ea odit quas!',
    company: 'Name and Sons'
  }
]



const Job = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center
      py-10'>
        {
          Data.map(({id, title, time, location, desc, company}) => {
            return (
              //This will a single job post based on the ID
              <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]
                  hover:bg-blueColor  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor 
                  group-hover:text-white '>
                    {title}
                  </h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive/>{time}
                </span>
                </span>
                <h6 className='text-[#ccc] text-[15px]'>{location}</h6>
                <p className='text-[#ccc] text-[13px] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                  {desc}
                </p>
                <div className='company flex items-center gap-2'>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>
                <button className="border-[2px] rounded-[5px] block p-[10px] w-full 
                text-[14px] font-semibold text-textColor hover:bg-white hover:text-black group-hover/item:text-textColor group-hover:text-black">
                  Apply Now
                </button>
              </div>
            )
          }
          
          )
        }

      </div>
    </div>
  )
}

export default Job
