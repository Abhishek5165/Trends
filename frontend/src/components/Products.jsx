import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const Products = ({id,image,name,price}) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <div className='flex gap-10'>
            <p className='text-sm font-medium'>{currency}{price}</p>
            <p className='hidden sm:block text-sm font-medium px-20 text-rose-500 underline'>View</p>
            </div>
        </Link>
    )
}

export default Products;