import React from 'react'
import 'react-tabs/style/react-tabs.css';

import { motion } from 'framer-motion';
import { AiFillStar, AiTwotoneShopping } from 'react-icons/ai'
import { GoEye } from 'react-icons/go'
import { FiHeart } from 'react-icons/fi'

import './Products.css'

const products = [

  {
    imageSrc: '/assets/FeaturedProducts-5.png',
    discount: '-19%',
    rating: [1, 2, 3, 4, 5],
    title: 'High-Top Canvas Sneakers',
    price: '$32.00',
    originalPrice: '$46.00',
  },
  {
    imageSrc: '/assets/FeaturedProducts-4.png',
    discount: '-25%',
    rating: [1, 2, 3, 4, 5],
    title: 'Black Leather Loafers',
    price: '$32.00',
    originalPrice: '$46.00',
  },
  {
    imageSrc: '/assets/FeaturedProducts-2.png',
    discount: '-45%',
    rating: [1, 2, 3, 4, 5],
    title: 'Black Leather Loafers',
    price: '$24.00',
    originalPrice: '$46.00',
  },
  {
    imageSrc: '/assets/FeaturedProducts-2.png',
    discount: '-45%',
    rating: [1, 2, 3, 4, 5],
    title: 'Black Leather Loafers',
    price: '$24.00',
    originalPrice: '$46.00',
  },
];


const Products = () => {

  return (
    <div className='bg-[#FFFFFF]'>
      <div id="products">
        <div className="Grid">
          <h1 className='text-5xl text-center font-bold py-4 mb-4'>Our Products</h1>
          <div className="products-tabs flex flex-wrap my-10 justify-evenly items-center">
            <h3 className='font-semibold uppercase'>Footwear Store</h3>
            <span></span>
            <h3 className='font-semibold uppercase'>Shoe Boutique</h3>
            <span></span>
            <h3 className='font-semibold uppercase'>Style Gallery</h3>
            <span></span>
            <h3 className='font-semibold uppercase'>Brand Outlet</h3>
            <span></span>
            <h3 className='font-semibold uppercase'>Sneaker Central</h3>
          </div>
          <div className="product-card  mb-14">
            <div className='products-inner flex'>
              {products.map((product) => (
                <div className="productsResponsive flex">
                  <div className="prodsResInner flex">
                    <div className="products-card mx-4 my-5 pb-5">
                      <picture>
                        <img src={product.imageSrc} alt="Product" />
                      </picture>
                      <div className='new-arrival'>
                        <h6 className='uppercase font-bold'>{product.discount}</h6>
                      </div>
                      <div className='products-desc'>
                        <div className='flex items-center pt-8 pl-5 pb-2'>
                          {product.rating.map((star, index) => (
                            <i key={index}><AiFillStar /></i>
                          ))}
                        </div>
                        <h4 className='font-semibold text-lg pl-5 py-1'>{product.title}</h4>
                        <h3 className='font-bold text-2xl pl-5'>{product.price} <span>{product.originalPrice}</span></h3>
                      </div>
                      <div className="products-hoverIcons">
                        <motion.ul
                          initial={{ opacity: 0, y: 80 }}
                          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                          exit={{ opacity: 0, y: 40 }}
                          transition={{ duration: 1 }}
                        >
                          <ul className='flex'>
                            <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                            <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                            <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                          </ul>
                        </motion.ul>
                      </div>
                    </div>
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

export default Products;