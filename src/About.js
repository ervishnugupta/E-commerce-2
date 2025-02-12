import HeroSection from './Components/HeroSection'
import { useProductContext } from './Context/ProductContext'

const About = () => {

  const {myName, myAge} = useProductContext();
  return (
    <>
    {myName}
    {myAge}
    <HeroSection data= {'Human Ecommerce'}/>
    </>

  )
}

export default About
