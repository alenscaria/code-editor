// Logo

import React from 'react'
import { logo } from '../assets';

function Navbar() {
  return (
    <div className='flex flex-row'>
      <img src={logo} className="h-20 ml-3 mt-1"></img>
      <p className="absolute top-5 right-10">System Time</p>
      </div>
  )
}

export default Navbar