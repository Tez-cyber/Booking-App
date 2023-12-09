import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useLocation } from "react-router-dom"
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../components/searchItem/SearchItem'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  //----------------------------Handle date
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)


  const [options, setOptions] = useState(location.state.options)

  console.log(location)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5 mb-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="flex-[1] bg-orange-200 p-3 rounded-xl sticky top-3 h-max">
            <h1 className="text-3xl font-semibold text-gray-900 mb-5">Search</h1>
            <div className="flex flex-col gap-1 mb-4">
              <label className=" text-sm">Destination</label>
              <input
                className='h-8 p-3 outline-none'
                type="text"
                placeholder='Enter destination'
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-sm">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className=" h-8 p-1 bg-white text-gray-600 cursor-pointer"
              >
                {
                  `${format(date[0].startDate, "MM/dd/yyyy")}
                    to 
                   ${format(date[0].endDate, "MM/dd/yyyy")}`
                }
              </span>
              {
                openDate &&
                <DateRange
                  onChange={item => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              }
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-sm">Options</label>
              <div className="p-4">
                <div className="flex justify-between mb-3 text-gray-700 text-sm">
                  <span className="">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="w-12 text-center outline-0" />
                </div>
                <div className="flex justify-between mb-3 text-gray-700 text-sm">
                  <span className="">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="w-12 text-center outline-0" />
                </div>
                <div className="flex justify-between mb-3 text-gray-700 text-sm">
                  <span className="">
                    Adult
                  </span>
                  <input
                    type="number"
                    className="w-12 text-center outline-0"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="flex justify-between mb-3 text-gray-700 text-sm">
                  <span className="">
                    Children
                  </span>
                  <input
                    type="number"
                    className="w-12 text-center outline-0"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="flex justify-between mb-3 text-gray-700 text-sm">
                  <span className="">
                    Room
                  </span>
                  <input
                    type="number"
                    className="w-12 text-center outline-0"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button className="p-2 bg-lightBlue text-white mb-2 w-full cursor-pointer">Search</button>
          </div>
          <div className="flex-[3]">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List