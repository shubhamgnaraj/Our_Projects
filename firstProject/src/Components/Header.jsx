import React from 'react'

function Header() {
  return (
    <>
    <div className=' w-full h-20 bg-gray-100 text-black  '>

        <div className=' h-full flex px-5 justify-between items-center font-serif '>

        <div className="logo ">
            <h1 className=' uppercase font-bold '><span className=' text-xl text-green-900'>&#60; N</span >i<span className=' text-xl text-green-900'>k</span>e &#62;</h1>
        </div>

        <div className="nav flex items-center  ">
            <ul className=' flex items-center gap-x-5 uppercase text-sm font-bold'>
                <li>menu</li>
                <li>location</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>

        <div className="butotn capitalize">
            <button className=' bg-red-700 text-white px-3 py-1'>Login</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Header