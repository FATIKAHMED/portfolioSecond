import React from 'react'
import './Landing_page.css'

function Landing_page() {
  return (
   <>
   <div className='h-[100vh] flex  bg-black p-2'>
    <div className='text-teal-400 w-[50%] flex flex-col items-center'>
   <div className='mt-10'>
   <h1 className="md:text-4xl text-xl font-normal text-white">
          Hello, I'm
          <span className=""> Fatik Ahmed Khan</span>,
        </h1>
        <h1 className="md:text-4xl text-xl font-normal text-white">
          I'm full stack web developer
        </h1>
        <button className=' view-button flex items-center gap-5 text-xl font-normal mt-8 text-white border-[3px] pl-5 pr-5 pt-2 pb-2 hover:bg-teal-400 transition-all duration-150 ease-in'>View My Work
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 button-arrow"
            viewBox="0 0 20 17"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <u className='mt-8 md:text-4xl text-2xl font-normal text-white justify-start flex pt-4 pb-4 pr-4'>BLOG</u>
       <p className=' pt-4 pb-4 pr-4 '>lorem is the dummy text!!!</p>
   </div>
   
    </div>
   </div>
   </>
  )
}

export default Landing_page
