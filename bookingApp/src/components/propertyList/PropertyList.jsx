import React from 'react'
import img2 from "../../assets/img-3.jpg"

const PropertyList = () => {
  return (
    <div className="w-full max-w-5xl flex justify-between gap-5">
        <div className="h-36 rounded-md cursor-pointer flex-1">
            <img src={img2} 
                alt=""
                className='object-cover'
            />
            <div className="">
                <h1 className="text-2xl font-bold">Hotels</h1>
                <h2 className="text-base text-gray-700 ">233 hotels</h2>
            </div>
        </div>
        <div className="rounded-xl h-36 cursor-pointer flex-1">
            <img src={img2} 
                alt=""
                className='object-cover'
            />
            <div className="">
                <h1 className="text-2xl font-bold">Hotels</h1>
                <h2 className="text-base text-gray-700 ">233 hotels</h2>
            </div>
        </div>
        <div className="rounded-xl h-36 cursor-pointer flex-1">
            <img src={img2} 
                alt=""
                className='object-cover'
            />
            <div className="">
                <h1 className="text-2xl font-bold">Hotels</h1>
                <h2 className="text-base text-gray-700 ">233 hotels</h2>
            </div>
        </div>
        <div className="rounded-xl h-36 cursor-pointer flex-1">
            <img src={img2} 
                alt=""
                className='object-cover'
            />
            <div className="">
                <h1 className="text-2xl font-bold">Hotels</h1>
                <h2 className="text-base text-gray-700 ">233 hotels</h2>
            </div>
        </div>
        <div className="rounded-xl h-36 cursor-pointer flex-1">
            <img src={img2} 
                alt=""
                className='object-cover'
            />
            <div className="">
                <h1 className="text-2xl font-bold">Hotels</h1>
                <h2 className="text-base text-gray-700 ">233 hotels</h2>
            </div>
        </div>        
        
    </div>
  )
}

export default PropertyList