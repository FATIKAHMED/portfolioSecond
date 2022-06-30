import React from 'react'

function Navbar() {
  return (
    <>
    <div className=' bg-gradient-to-r from-teal-600 to-teal-900 sticky top-0 '>
      <nav >
        <div className=' flex flex-wrap gap-8 ml-8 '>
        <a className='text-white m-4 text-2xl cursor-pointer ' href='#'>Home</a>
        <a className='text-white m-4 text-2xl cursor-pointer  ' href='#'>About</a>
        <a className='text-white m-4 text-2xl cursor-pointer  ' href='#'>Portfolio</a>
        <a className='text-white m-4 text-2xl cursor-pointer  ' href='#'>Contact</a>
        </div>
      </nav>
  </div>
    </>
  )
}

export default Navbar
