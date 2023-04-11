// Logo

import React from 'react'
import { logo } from '../assets';
import SystemTime from './SystemTime';

function Navbar() {
  return (
    <div className='flex flex-row'>
      <img src={logo} className="h-20 ml-3 mt-1"></img>
      <div className="absolute top-5 right-10"><SystemTime /></div>
      </div>
  )
}

export default Navbar