import React from 'react'
import { Link } from 'react-router-dom'

function Protection() {
  
  return (
    <div className=' w-screen h-screen'>
      <div>
        <p>rule 1</p>
        <p>rule 2</p>
        <p>rule 3</p>
        <p>rule 4</p>
      </div>
      <Link to="/AddRule"><div className=' flex justify-center items-center h-20 w-20 text-8xl mt-[40%] ml-[90%] cursor-pointer sticky'>+</div></Link>
    </div>
  )
}

export default Protection