import React from 'react'
import {FaApple, FaSearch,FaBars, FaShoppingBag
} from "react-icons/fa"
const Navbar = () => {
  return (
  <>
            {/*  Desktop-View */}
      <nav  className=' bg-black bg-opacity-70 backdrop-blur-md text-white hidden md:flex p-4 items-center justify-center z-100 sticky top-[0%]'>
        <a href="#" className='text-3xl mr-5'><FaApple/></a>
        <ul className='flex space-x-5'>
          <li><a href="">Store</a></li>
          <li><a href="">Mac</a></li>
          <li><a href="">iPad</a></li>
          <li><a href="">iPhone</a></li>
          <li><a href="">Watch</a></li>
          <li><a href="">AirPods</a></li>
          <li><a href="">Tv & Home</a></li>
          <li><a href="">Entertainment</a></li>
          <li><a href="">Accessories</a></li>
          <li><a href="">Support</a></li>
        </ul >
        <ul className='text-xl flex space-x-5 ml-5'>
          <l1><a href="#"><FaSearch/></a></l1>
          <l1><a href="#"><FaShoppingBag/></a></l1>
        </ul>
      </nav> 
      <nav className='bg-black p-4 flex justify-between items-center md:hidden '>
        <section className='text-white text-3xl cursor-pointer'>
          <FaApple />
        </section>  
        <section>
          <ul className='text-white text-xl cursor-pointer space-x-6 flex'>
            <li><FaSearch /></li>
            <li><FaShoppingBag /></li>
            <li><FaBars /></li>
          </ul>
        </section>
      </nav>
      <section className=' bg-gray-600 text-white hidden md:flex p-4 items-center justify-center'>
        <p>
          Get Up to 12 Month of No Cost EMI plus up to ₹8000.00 instant cashback ± on selected products with eligible cards. 
          <span className='ml-4'>
            <a href="#" className='text-blue-500'>Shop&gt;</a>
            </span>
        </p>
      </section>  
  </>  
  )
}

export default Navbar