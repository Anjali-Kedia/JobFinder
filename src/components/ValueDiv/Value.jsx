import React from 'react'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] font-bold py-[2rem] pb-[3rem]  w-[400px] block'>We Truly Believe In</h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center '>
        <div className='singleGrid rounded-[5px] hover:bg-[#eeedf7] p-[1.5rem] '>
          <div className='flex items-center  gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px]
            w-[40px] flex items-center justify-center'>
              {/* <img src='#' alt="" className='w-[70%]'/>  */}
            </div>
            <span className='font-semibold  text-textColor text-[18px]'>
            No cost to apply
            </span> 

          </div> 
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Easy and no cost apply 
          </p>
        </div>

        <div className='singleGrid rounded-[5px] hover:bg-[#eeedf7] p-[1.5rem] '>
          <div className='flex items-center  gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px]
            w-[40px] flex items-center justify-center'>
              {/* <img src='#' alt="" className='w-[70%]'/>  */}
            </div>
            <span className='font-semibold  text-textColor text-[18px]'>
            No cost to apply
            </span> 

          </div> 
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Easy and no cost apply 
          </p>
        </div>

        <div className='singleGrid rounded-[5px] hover:bg-[#eeedf7] p-[1.5rem] '>
          <div className='flex items-center  gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px]
            w-[40px] flex items-center justify-center'>
              {/* <img src='#' alt="" className='w-[70%]'/>  */}
            </div>
            <span className='font-semibold  text-textColor text-[18px]'>
            No cost to apply
            </span> 

          </div> 
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Easy and no cost apply 
          </p>
        </div>

      </div>

      <div className='card mt-[2rem] flex justify-between bg-greyIsh p-[5rem] rounded-[5px]
      '>
        <div>
          <h1 className='text-white text-[30px] font-bold'>Ready for your new career?

          </h1>
          <h2 className='text-textColor text-[25px] font-bold'>
            Let's get started!
          </h2>
        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px]
        font-semibold text-blueColor hover:bg-white border-blueColor'>
          Get Started
        </button>

      </div>
    </div>
  )
}

export default Value
