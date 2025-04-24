import React from 'react'
import { Link } from 'react-router-dom'

function Protection() {
  
  return (
    <div className=' w-screen h-screen'>
      <div className="ml-22 mt-22 font-bold text-2xl" >
        <p>No Custom Rule Added</p>
        
      </div>
      <Link to="/AddRule"><div className=' flex justify-center items-center h-20 w-20 text-8xl mt-[39%] ml-[90%] cursor-pointer sticky'>+</div></Link>
    </div>
  )
}

export default Protection