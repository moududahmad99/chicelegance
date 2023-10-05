import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Topbar from '../../components/topbar/Topbar'
import Banner from '../../components/banner/Banner'
import Shop from '../../components/shop/Shop'
import Products from '../../components/products/Products'
import Countdown from '../../components/countdown/Countdown'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import YTVideo from '../../components/ytVideo/YTVideo'
 import Testimonials from '../../components/testimonials/Testimonials'
import Blog from '../../components/blog/Blog'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Banner />
            <Shop />
            <Products />
            <Countdown />
            <FeaturedProducts />
            <YTVideo />
            <Testimonials />
            <Blog />
            <Footer />
        </div>
    )
}

export default Home;