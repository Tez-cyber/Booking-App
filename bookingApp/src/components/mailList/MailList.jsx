import React from 'react'

const MailList = () => {
    return (
        <div className="w-full mt-12 bg-appBlue text-white flex flex-col items-center gap-5 p-12">
            <h1 className="text-4xl font-bold">Save time, save money!</h1>
            <span className="">Sign up and we'll send the best deals to you</span>
            <div className="">
                <input
                    className='w-80 h-8 p-2 mr-3 rounded-l-md outline-none text-black'
                    placeholder='Your Email'
                    type="text"
                />
                <button className="h-8 bg-lightBlue text-white font-medium px-4 rounded-r-md cursor-pointer">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default MailList