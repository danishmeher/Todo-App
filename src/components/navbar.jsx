import React from 'react'

const Nav = () => {
  return (
    <navbar className="flex justify-between py-2 bg-blue-900 text-white">
        <div className="logo font-bold text-xl mx-9">
            <a href='http://localhost:5173/'  className='cursor-pointer'>iTask</a>
        </div>
        <ul className="flex gap-5 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Task</li>
        </ul>
    </navbar>
  )
}

export default Nav