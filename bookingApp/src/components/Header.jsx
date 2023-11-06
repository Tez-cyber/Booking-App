import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'


const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleCount = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "inc" ? options[name] + 1 : options[name] - 1
            }
        })
    }
    return (
        <div className="bg-appBlue text-white flex justify-center relative">
            <div className="w-full max-w-5xl mt-5 mr-0 mb-24 ml-0">
                <div className="flex gap-10">
                    <div className="flex items-center gap-2 active:border active:border-solid active:rounded-3xl active:border-white active:p-2">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxi</span>
                    </div>
                </div>
                <h1 className="mt-5 text-4xl font-semibold">
                    A lifetime of discounts? It's Genius
                </h1>
                <p className=" my-4 mx-0 ">
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free Tezbooking account
                </p>
                <button className=" bg-lightBlue px-5 py-3 cursor-pointer">
                    Sign in / Register
                </button>
                <div className="h-14 bg-white border-solid border-[3px] border-[#febb02] flex items-center justify-around py-4 px-0 rounded-md absolute bottom-[-25px] w-full max-w-5xl">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faBed} className='text-gray-500' />
                        <input
                            type="text"
                            placeholder='Where are you going?'
                            className='text-black outline-none'
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCalendarDays} className='text-gray-500' />
                        <span onClick={() => setOpenDate(!openDate)} className=" text-gray-400">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {
                            openDate &&
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='absolute top-12'
                            />
                        }
                    </div>
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faPerson} className='text-gray-500' />
                        <span onClick={() => setOpenOptions(!openOptions)} className=" text-gray-400">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                        {
                            openOptions &&
                            <div className="absolute top-12 bg-white text-gray-400 rounded-md shadow-md">
                                <div className="flex justify-between w-52 m-4">
                                    <span className="">Adult</span>
                                    <div className="flex items-center gap-3 text-sm text-black">
                                        <button
                                            disabled={options.adult <= 1}
                                            onClick={() => handleCount("adult", "dec")}
                                            className="w-7 h-7 border border-solid border-lightBlue cursor-pointer bg-white disabled:cursor-not-allowed">
                                            -
                                        </button>
                                        <span className="">{options.adult}</span>
                                        <button
                                            onClick={() => handleCount("adult", "inc")}
                                            className="w-7 h-7 border border-solid border-lightBlue cursor-pointer bg-white">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between w-52 m-4">
                                    <span className="">Children</span>
                                    <div className="flex items-center gap-3 text-sm text-black">
                                        <button
                                            disabled={options.children <= 0}
                                            onClick={() => handleCount("children", "dec")}
                                            className="w-7 h-7 border border-solid border-lightBlue cursor-pointer bg-white disabled:cursor-not-allowed">
                                            -
                                        </button>
                                        <span className="">{options.children}</span>
                                        <button
                                            onClick={() => handleCount("children", "inc")}
                                            className="w-7 h-7 border border-solid border-lightBlue cursor-pointer bg-white">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between w-52 m-4">
                                    <span className="">Room</span>
                                    <div className="flex items-center gap-3 text-sm text-black">
                                        <button
                                            disabled={options.room <= 1}
                                            onClick={() => handleCount("room", "dec")}
                                            className="w-7 h-7 border border-solid border-lightBlue cursor-pointer bg-white disabled:cursor-not-allowed">
                                            -
                                        </button>
                                        <span className="">{options.room}</span>
                                        <button
                                            onClick={() => handleCount("room", "inc")}
                                            className="w-7 h-7 border border-solid border-lightBlue cursor-pointer bg-white"
                                        >+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#0071c2] px-5 py-2 cursor-pointer">Search</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header