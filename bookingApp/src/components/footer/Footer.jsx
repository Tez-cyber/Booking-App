import React from 'react'

const Footer = () => {
    const ListItems = [
        {name: "Countries"},
        {name: "Regions"},
        {name: "Cities"},
        {name: "Districts"},
        {name: "Airports"},
        {name: "Hotels"},
    ]
  return (
    <div className="w-full max-w-5xl text-xs ">
        <div className="w-full flex justify-between mb-12">
            <ul className="">
                {
                    ListItems.map(item => (
                        <li key={item.name} className="mb-2 text-appBlue cursor-pointer">{item.name}</li>
                    ))
                }
               
            </ul>
           
        </div>
        <div className="">Copyright &copy; {new Date().getFullYear()} Tezbooking</div>
    </div>
  )
}

export default Footer