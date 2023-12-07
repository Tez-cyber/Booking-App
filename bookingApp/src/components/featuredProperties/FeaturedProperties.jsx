import React from 'react'
import Img3 from "../../assets/img-2.jpg"

const FeaturedProperties = () => {
    return (
        <div className="w-full max-w-5xl flex justify-between gap-5">
            <div className="flex-1 gap-2 flex flex-col">
                <img
                    className='w-full'
                    src={Img3} alt="" />
                <span className="font-bold">Aparthotel Stare Miasto</span>
                <span className="">Madrid</span>
                <span className="font-bold">Starting from $120</span>
                <div className="">
                    <button className="bg-appBlue text-white p-1 rounded-sm mr-3 font-bold">8.9</button>
                    <span className="text-sm">Excellent</span>
                </div>
            </div>
            <div className="flex-1 gap-2 flex flex-col">
                <img
                    className='w-full'
                    src={Img3} alt="" />
                <span className="font-bold">Aparthotel Stare Miasto</span>
                <span className="">Madrid</span>
                <span className="font-bold">Starting from $120</span>
                <div className="">
                    <button className="bg-appBlue text-white p-1 rounded-sm mr-3 font-bold">8.9</button>
                    <span className="text-sm">Excellent</span>
                </div>
            </div>
            <div className="flex-1 gap-2 flex flex-col">
                <img
                    className='w-full'
                    src={Img3} alt="" />
                <span className="font-bold">Aparthotel Stare Miasto</span>
                <span className="">Madrid</span>
                <span className="font-bold">Starting from $120</span>
                <div className="">
                    <button className="bg-appBlue text-white p-1 rounded-sm mr-3 font-bold">8.9</button>
                    <span className="text-sm">Excellent</span>
                </div>
            </div>
            <div className="flex-1 gap-2 flex flex-col">
                <img
                    className='w-full'
                    src={Img3} alt="" />
                <span className="font-bold">Aparthotel Stare Miasto</span>
                <span className="">Madrid</span>
                <span className="font-bold">Starting from $120</span>
                <div className="">
                    <button className="bg-appBlue text-white p-1 rounded-sm mr-3 font-bold">8.9</button>
                    <span className="text-sm">Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties