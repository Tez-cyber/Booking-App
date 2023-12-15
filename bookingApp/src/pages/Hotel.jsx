import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import img1 from "../assets/img-5.jpg"
import img2 from "../assets/img-6.jpg"
import img3 from "../assets/img-7.jpg"
import img4 from "../assets/img-8.jpg"
import img5 from "../assets/img-9.jpg"
import img6 from "../assets/img-10.jpg"
import MailList from '../components/mailList/MailList'
import Footer from '../components/footer/Footer'




const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const images = [
    {
      id: 1,
      src: img6
    },
    {
      id: 2,
      src: img2
    },
    {
      id: 3,
      src: img3
    },
    {
      id: 4,
      src: img2
    },
    {
      id: 5,
      src: img3
    },
    {
      id: 6,
      src:  img6
    },
  ]
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  }

  //-----------Handle slider
  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div className="">
      <Navbar />
      <Header type="list" />
      <div className="flex flex-col items-center">
        {
          open && 
            <div className="sticky top-0 left-0 bg-[#00000099] h-screen z-[999] backdrop-blur-md flex items-center">
              <FontAwesomeIcon onClick={() => setOpen(false)} icon={faCircleXmark} className='absolute top-5 right-5 text-4xl text-gray-200 cursor-pointer '/>
              <FontAwesomeIcon icon={faCircleArrowLeft} onClick={() => handleMove("l")} className='m-5 text-5xl text-gray-200 cursor-pointer' />
              <div className="w-full h-full flex justify-center items-center">
                <img className='w-[70%]' src={images[slideNumber].src} alt="" />
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} onClick={() => handleMove("r")} className='m-5 text-5xl text-gray-200 cursor-pointer' />
            </div>
        }
        <div className="w-full max-w-5xl flex flex-col gap-2 relative mt-5">
          <button className="absolute right-0 top-2 bg-lightBlue text-white px-3 py-2 font-semibold rounded-md cursor-pointer">Reserve / Book now</button>
          <h1 className="text-2xl font-semibold">Grand Hotel</h1>
          <div className="text-sm flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="">Elton 5t New york</span>
          </div>
          <span className=" text-lightBlue">
            Excellent location - 500m from center
          </span>
          <span className="text-appGreen">
            Book a stay over $114 at this property and get a free airpot taxi
          </span>
          <div className="flex flex-wrap justify-between">
            {
              images.map((image, i) => (
                <div key={image.src} className="w-[33%] mb-2">
                  <img onClick={() => handleOpen(i)} key={image.src} src={image.src} alt="w-full" />
                </div>
              ))
            }
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <div className="flex-[3]">
              <h1 className="text-2xl">Stay in the heart of Krakow</h1>
              <p className="text-sm">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and 
                free WiFi. The units come with hardwood floors and feature a 
                fully equipped kitchenette with a microwave, a flay-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tes pot and a coffee
                machine. Popular points of interest near the apartment include
                CLoth Hall, Main Market Square and Town Hall Tower. The nearest 
                airport is JOhn Paul II International Krakow-Balice, 16.1km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service
              </p>
            </div>
            <div className="flex-[1] bg-[#ebf3ff] p-3 flex flex-col gap-5">
              <h1 className="text-xl text-gray-600 font-semibold">Perfect for a 9-night stay!</h1>
              <span className="text-sm text-gray-700">
                Located in the real heart of Krakow, this property has
                excellent location score of 9.8
              </span>
              <h2 className="">
                <b>$945</b> (9 nights)
              </h2>
              <button className=" bg-lightBlue text-white px-3 py-2 font-semibold rounded-md cursor-pointer">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel