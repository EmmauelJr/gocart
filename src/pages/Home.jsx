import React from 'react'
import Hero from '../components/Hero'
import LatestProducts from '../components/LatestProducts'
import BestSelling from '../components/BestSelling'
import OurSpecs from '../components/OurSpecs'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestProducts />
      <BestSelling />
      <OurSpecs />
      <Newsletter />
    </div>
  )
}

export default Home