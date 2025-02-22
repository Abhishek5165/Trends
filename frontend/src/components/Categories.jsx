import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center mt-28 text-xs sm:text-sm md:text-base text-gray-700'>
            <div >
                <img className="rounded w-80 h-80 sm:ml-5" src={assets.Cart1} alt="image description" />

                <img src={assets.quality_icon} alt="Exchange" className='mt-3 text-center w-12 m-auto mb-5' />

                <p className='font-semibold'>Womens Collections</p>
                <p className='text-gray-400'>We offer large Collections for Womens</p>
                <Link to={'collections'}><button className='mt-3 bg-emerald-700 text-white px-4 py-1 rounded'>Explore now </button></Link>
            </div>
            <div >
                <img className="rounded w-96 h-80 sm:ml-5" src={assets.Cart2} alt="image description" />

                <img src={assets.quality_icon} alt="Exchange" className='mt-3 text-center w-12 m-auto mb-5' />

                <p className='font-semibold'>Mens Fashion</p>
                <p className='text-gray-400'>Choose from wide range of mens fashion</p>
                <Link to={'collections'}><button className='mt-3 bg-emerald-700 text-white px-4 py-1 rounded'>Shop now </button></Link>
            </div>
            <div >
                <img className="rounded w-80 h-80 sm:ml-5" src={assets.Cart3} alt="image description" />

                <img src={assets.quality_icon} alt="Exchange" className='mt-3 text-center w-12 m-auto mb-5' />

                <p className='font-semibold'>Kids Wears</p>
                <p className='text-gray-400'>We offer large Collections for Kids</p>
                <Link to={'collections'}><button className='mt-3 bg-emerald-700 text-white px-4 py-1 rounded'>Discover now </button></Link>
            </div>
        </div>
    )
}

export default Categories;
