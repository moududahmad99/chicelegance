import React from 'react'
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import { motion } from 'framer-motion';
import { AiOutlineStar, AiFillStar, AiTwotoneShopping } from 'react-icons/ai'
import { BiSolidStarHalf } from 'react-icons/bi'
import { GoEye } from 'react-icons/go'
import { FiHeart } from 'react-icons/fi'

import './Products.css'

const Products = () => {
  return (
    <div className='bg-[#FFFFFF]'>
      <div id="products">
        <div className="Grid">
          <h1 className='text-5xl text-center font-bold py-4 mb-4'>Our Products</h1>
          <Tabs>
            <div className="products-tabs">
              <TabList className='flex flex-wrap my-10 justify-evenly items-center'>
                <Tab>
                  <h3 className='font-semibold uppercase'>Footwear Store</h3>
                  <span></span>
                </Tab>
                <Tab>
                  <h3 className='font-semibold uppercase'>Shoe Boutique</h3>
                  <span></span>
                </Tab>
                <Tab>
                  <h3 className='font-semibold uppercase'>Style Gallery</h3>
                  <span></span>
                </Tab>
                <Tab>
                  <h3 className='font-semibold uppercase'>Brand Outlet</h3>
                  <span></span>
                </Tab>
                <Tab>
                  <h3 className='font-semibold uppercase'>Sneaker Central</h3>
                </Tab>
              </TabList>
            </div>
            <div className="product-card  mb-14">
              <TabPanel>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-5.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>-19%</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>High-Top Canvas Sneakers</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-4.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>-25%</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Black Leather Loafers</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-6.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Canvas Espadrille Flats</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-8.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>-75%</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Classic Penny Loafers</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-7.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Sporty Running Shoes</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-8.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Winter Snow Boots</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-1.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Suede Chelsea Boots</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-4.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Platform Sneaker Styles</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
              </TabPanel>
              <TabPanel>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-1.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Comfort Slipper Selection</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-7.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Outdoor Trail Hikers</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-8.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Fashionable Wedge Sandals</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-2.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Sleek Derby Oxfords</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-5.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Walking Shoe Varieties</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-4.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Stylish Ankle Booties</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-6.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Designer Heeled Pumps</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-8.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Rugged Work Boots</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
              </TabPanel>
              <TabPanel>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-7.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Canvas Boat Shoes</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-3.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Luxe Leather Brogues</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-2.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Trendy Platform Sneakers</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-6.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Cozy Fleece Slippers</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-5.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Trail Running Shoes</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-4.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Western Cowboy Boots</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-8.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Summer Flip-Flop Styles</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-1.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Beach Sandal Collection</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
              </TabPanel>
              <TabPanel>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-1.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Waterproof Hiking Boots</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-2.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Waterproof Boots</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-3.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Trail Running Shoes</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-8.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Cozy Fleece Slippers</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-4.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Luxe Leather Brogues</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-5.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Brown Leather Boots</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-6.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Casual Slip-On Shoes</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-8.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Training Sneakers</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
              </TabPanel>
              <TabPanel>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-5.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Formal Dress Shoes</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-4.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Hiking Boot Series</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-6.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Canvas Espadrille Flats</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-8.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Black Leather Loafers</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
                <div className='products-inner flex'>
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-7.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Winter Snow Boots</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-8.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Suede Chelsea Boots</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                  <div className="productsResponsive flex">
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-1.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Platform Sneaker Styles</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                    <div className="w-6/12 prodsResInner">
                      <div className="products-card mx-4 my-5 pb-5">
                        <picture>
                          <img src="/assets/FeaturedProducts-4.png" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>New</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Sneaker Styles</h4>
                          <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
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
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Products;