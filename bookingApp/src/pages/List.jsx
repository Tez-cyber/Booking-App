import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useLocation } from "react-router-dom"
import { format } from 'date-fns'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  console.log(location)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="flex-[1] bg-orange-200 p-3 rounded-xl sticky top-3">
            <h1 className="">Search</h1>
            <div className="">
              <label className="">Destination</label>
              <input 
                type="text"
                placeholder='Enter destination' 
              />
            </div>
            <div className="">
              <label className="">Check-in Date</label>
              <span className="">
                {
                  `${format(date[0].startDate, "MM/dd/yyyy")}
                    to 
                   ${format(date[0].endDate, "MM/dd/yyyy")}`
                }
              </span>
            </div>
          </div>
          <div className="flex-[3]"></div>
        </div>
      </div>
    </div>
  )
}

export default List