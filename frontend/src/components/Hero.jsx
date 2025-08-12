import React from 'react'
import { MainCarousalData } from '../assets/assets';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Hero = () => {
  const items = MainCarousalData.map((item) => {
    return <div class="flex justify-center items-center h-auto cursor-pointer z-0">
      <img src={item.image} alt="Centered Image" />
    </div>

  })
  return (
    <AliceCarousel
      items={items}
      autoPlay
      disableButtonsControls
      autoPlayInterval={1800}
      infinite
    />
  )
}

export default Hero;
