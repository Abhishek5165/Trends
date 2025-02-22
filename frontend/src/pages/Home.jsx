import React from 'react'
import Hero from '../components/Hero';
import LatestCollections from '../components/LatestCollections';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';
import DownloadApp from '../components/DownloadApp';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories/> 
      <LatestCollections/>
      <BestSeller/>
      <NewsLetterBox/>
      <OurPolicy/>
      <DownloadApp/>
    </div>
  )
}

export default Home;
