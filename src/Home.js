import React from 'react'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'
import FeatureProducts from './Components/FeatureProducts'

const Home = () => {
  return (
    <>
    <HeroSection data={'Human Store'}/>
    <FeatureProducts/>
    <Services/>

    <Trusted/>

    </>
  )
}


export default Home
