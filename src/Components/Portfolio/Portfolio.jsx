import React from 'react'
import './Portfolio.css'
import demometaplex from '../../Assets/metaplex.png'
import demoproxime from '../../Assets/proxime.png'
import demoapecity from '../../Assets/apecity.jpg'
import demodog from '../../Assets/carolynntucciarone.jpg'


function Portfolio() {
  return (
    <div className=' bg-black pb-20'>
              <div className="p-2  font-semibold text-center text-5xl  ">
        <h6 className="sets  mt-14 text-white">PROJECTS</h6>
      </div>

      <div className="flex flex-wrap m-2 gap-8 justify-center mt-14 ">
        <div className="flex flex-col justify-center items-center  border-2 border-white  cursor-pointer hover:">
          <img
            className="w-[200px] h-[200px] "
            src={demometaplex}
          />
          <h5 className="text-3xl font-semibold text-white p-2">lorem</h5>
          <p className="text-white border-b-2 border-white ">
            lorem is a dummy text
          </p>
          <p className="text-white pb-2">this is also dummy text.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[200px] h-[200px] border-2 border-white"
            src={demoproxime}
          />
          <h5 className="text-3xl font-semibold text-white p-2">
            lorempb-2
          </h5>
          <p className="text-white ">lorem is dummy text</p>
          <p className="text-white pb-2">this is also text.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[200px] h-[200px] border-2 border-white"
            src={demoapecity}
          />
           <h5 className="text-3xl font-semibold text-white p-2">
            lorem
          </h5>
          <p className="text-white "> lorem is a dummy text</p>
          <p className="text-white pb-2"> this si also text.</p>
          </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[200px] h-[200px] border-2 border-white"
            src={demodog}
          />
         <h5 className="text-3xl font-semibold text-white p-2">
            lorem
          </h5>
          <p className="text-white ">lorem is a dummy text</p>
          <p className="text-white pb-2">this si also dummy text.</p>
        </div>
      </div>

    </div>
  )
}

export default Portfolio;