import React from 'react'
import { MainCarousalData } from '../assets/assets';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Hero = () => {
    const items =  MainCarousalData.map((item)=>{
        return <img className='cursor-pointer z-0' role='presentation' src={item.image} alt='HeroImage'/>
    })
  return (
      <AliceCarousel
        items={items}
        autoPlay
        disableButtonsControls
        autoPlayInterval={2000}
        infinite
    />
  )
}

export default Hero;
