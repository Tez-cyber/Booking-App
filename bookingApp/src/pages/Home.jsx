import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Featured from '../components/featured/Featured'
import PropertyList from '../components/propertyList/PropertyList'
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties'
import MailList from '../components/mailList/MailList'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="mt-12 flex flex-col items-center gap-7">
          <Featured />
          <h1 className="w-[1024px] font-bold text-xl">Browse by property type</h1>
          <PropertyList />
          <h1 className="w-[1024px] font-bold text-xl">Homes guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home