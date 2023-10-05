import React from 'react'
import './FeaturedProducts.css'

import { AiFillStar, AiTwotoneShopping } from 'react-icons/ai'
import { GoEye } from 'react-icons/go'
import { FiHeart } from 'react-icons/fi'

import { motion } from 'framer-motion';


const featuredProduct = [
  {
    id: 1,
    imageSrc: '/assets/FeaturedProducts-5.png',
    isNew: true,
    rating: [1, 2, 3, 4, 5],
    title: 'Winter Snow Boots',
    price: '$32.00',
    originalPrice: '$46.00',
  },
  {
    id: 2,
    imageSrc: '/assets/FeaturedProducts-4.png',
    isNew: true,
    rating: [1, 2, 3, 4, 5],
    title: 'Winter Snow Boots',
    price: '$32.00',
    originalPrice: '$46.00',
  },
  {
    id: 3,
    imageSrc: '/assets/FeaturedProducts-3.png',
    isNew: true,
    rating: [1, 2, 3, 4, 5],
    title: 'Winter Snow Boots',
    price: '$32.00',
    originalPrice: '$46.00',
  },
  {
    id: 4,
    imageSrc: '/assets/FeaturedProducts-2.png',
    isNew: true,
    rating: [1, 2, 3, 4, 5],
    title: 'Winter Snow Boots',
    price: '$32.00',
    originalPrice: '$46.00',
  }
];

const FeaturedProducts = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF]">
        <div className="Grid">
          <div id="featProducts">
            <h1 className='text-5xl text-center font-bold mt-10 pt-14 mb-8'>Featured Products</h1>
              <div className="featProdResInner flex justify-evenly grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
            {featuredProduct.map((product) => (
                <div className="featProducts-card mx-4 my-5 pb-5">
                  <picture>
                    <img src={product.imageSrc} alt="Featured Product" />
                  </picture>
                  <div className='new-arrival'>
                    <h6 className='uppercase font-bold'>{product.isNew ? 'New' : ''}</h6>
                  </div>
                  <div className='featProducts-desc'>
                    <div className='flex items-center pt-8 pl-5 pb-2'>
                      {product.rating.map((star, index) => (
                        <i key={index}><AiFillStar /></i>
                      ))}
                    </div>
                    <h4 className='font-semibold text-lg pl-5 py-1'>{product.title}</h4>
                    <h3 className='font-bold text-2xl pl-5'>{product.price} <span>{product.originalPrice}</span></h3>
                  </div>
                  <div className="featured-hoverIcons">
                    <motion.ul
                      initial={{ opacity: 0, y: 80 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2 } }}
                      exit={{ opacity: 0, y: 40 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ul className='flex'>
                        <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                        <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                        <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                      </ul>
                    </motion.ul>
                  </div>
                </div>
            ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts;