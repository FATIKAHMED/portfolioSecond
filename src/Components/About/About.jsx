import React from "react";
import './About.css'
import demoprofile from '../../Assets/demo.jpg'

function About() {
  return (
    <div className=" bg-gradient-to-r from-black to-gray-700  items-end pb-4 justify-center gap-[20px] h-[100vh] flex ">
      <div className="w-[50%] pb-3 ">
        <h2 className="text-white md:text-4xl text-lg   font-normal ml-6 ">
          Crafting
        </h2>
        <h2 className="text-white md:text-4xl text-lg font-normal ml-6">
          Awesomeness
        </h2>
        <p className="text-white container w-[35vw] ml-6 mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea autem,
          fugiat voluptatibus sequi omnis voluptas asperiores, esse natus, sed
          at aliquid cum? Fugiat non repellat eum suscipit obcaecati ex.
          Nostrum.
        </p>
        <button className="view-button flex items-center text-center gap-5 md:text-lg text-[12px] font-light mt-3 ml-6 text-white border-[2px] pl-1 pr-1 pt-1 pb-1 hover:bg-gradient-to-r from-teal-600 to-teal-900  ">
          View Some Projects
        </button>
      </div>
      <div className="text-white w-[50%] object-contain flex flex-wrap">
        <img className=" w-[50vw] h-[85vh] p-3 " src={demoprofile}/>
      </div>
    </div>
  );
}

export default About;
