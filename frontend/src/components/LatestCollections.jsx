import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitems from './ProductItems';


const LatestCollections = () => {
    const {products} = useContext(ShopContext);

    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,25))
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LASTEST '} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Shop Indian designer clothes online at Trends. Explore the latest collection of Indian designer wear including lehengas, kurtas, Nehru jackets, ...</p>
      </div>

      {/* rendering products  */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item,index)=>{
                return (
                    <Productitems
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                )
            })
        }
      </div>
    </div>
  )
}

export default LatestCollections
