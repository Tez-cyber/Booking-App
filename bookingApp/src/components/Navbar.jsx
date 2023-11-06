import React from 'react'

const Navbar = () => {
  return (
    <div className=" h-[50px] bg-appBlue flex justify-center">
        <div className="w-full max-w-5xl text-white flex items-center justify-between">
            <span className=" font-bold text-2xl">Tezbooking</span>
            <div className="">
                <button className="ml-5 px-3 py-1 text-black bg-white">Register</button>
                <button className="ml-5 px-3 py-1 text-black bg-white">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar