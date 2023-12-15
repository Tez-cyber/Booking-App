import React from 'react'
import img from "../../assets/img-1.jpg"

const SearchItem = () => {
  return (
    <div className="border border-solid border-gray-400 flex justify-between p-3 rounded-md gap-5 mb-5"> 
        <img 
            src={img}
            className='w-48 object-cover'
            alt="" />
        <div className="flex flex-col gap-3 flex-[2]">
            <h1 className="text-2xl text-lightBlue">Tower Street Apartments</h1>
            <span className="text-sm">500m from center</span>
            <span className="text-xs rounded-sm bg-appGreen text-white p-1 w-max ">Free airport taxi</span>
            <span className="text-sm font-bold">Studio Apartment with Air conditioning</span>
            <span className="text-sm">Entire studio - 1 bathroom - 21 x 21 full bed</span>
            <span className="font-bold text-appGreen text-sm">Free cancellation</span>
            <span className="text-appGreen text-sm">
                You can cancel later, so lock in this this great price today!
            </span>
        </div>
        <div className="flex-[1] flex flex-col justify-between">
            <div className="flex justify-between">
                <span className="">Excellent</span>
                <span className="bg-appBlue text-white text-sm p-[2px]">8.9</span>
            </div>
            <div className="flex flex-col text-right">
                <span className="text-2xl">$112</span>
                <span className="text-sm mb-2 text-gray-500">Includes taxes and fees</span>
                <button className="bg-lightBlue cursor-pointer text-white p-2 rounded-md">
                    See availablility
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem