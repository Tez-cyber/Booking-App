import React from 'react'
import Img1 from "../../assets/img-1.jpg"
import Img2 from "../../assets/img-2.jpg"
import Img3 from "../../assets/img-3.jpg"
import Img4 from "../../assets/img-4.jpg"

const Featured = () => {
  return (
    <div className='w-full max-w-5xl flex justify-between gap-5'>
        <div className="relative text-white rounded-lg overflow-hidden h-60">
            <img src={Img1} alt="" />
            <div className=" absolute bottom-5 left-5">
                <h1 className='text-2xl font-extrabold'>Dublin</h1>
                <h2 className='text-base font-bold'>123 properties</h2>
            </div> 
        </div>
        <div className="relative text-white rounded-lg overflow-hidden h-60">
            <img src={Img1} alt="" />
            <div className=" absolute bottom-5 left-5">
                <h1 className='text-2xl font-extrabold'>Dublin</h1>
                <h2 className='text-base font-bold'>123 properties</h2>
            </div> 
        </div>
        <div className="relative text-white rounded-lg overflow-hidden h-60">
            <img src={Img1} alt="" />
            <div className=" absolute bottom-5 left-5">
                <h1 className='text-2xl font-extrabold'>Dublin</h1>
                <h2 className='text-base font-bold'>123 properties</h2>
            </div> 
        </div>
    </div>
  )
}

export default Featured