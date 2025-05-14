import React from 'react'
import mackbook from './images/macbook.jpg'
import ipad from './images/ipad.jpg'
import Airpods from './images/airpods.jpg'
import iphone from './images/trendsection.jpg'
const Content = () => {
  return (
    <aside className=' flex flex-col md:flex-row flex-wrap gap-4 md:justify-center md:px-2 mt-6 text-center text-black text-sm md:text-lg'>
        <section style={{backgroundImage:`url(${Airpods})`}} className='flex flex-col  py-10 bg-cover text-white bg-center  md:w-[600px]  w-[100%]  h-[30rem] '>
            <h1 className='font-bold text-2xl '>AirPods. Magic in Your Ears.</h1>
            <p>redefine your listening experience with AirPods.</p>
        </section>  
        <section style={{backgroundImage:`url(${iphone})`}} className='bg-cover bg-center flex flex-col  py-10   md:w-[600px]  w-[100%]  h-[30rem] '>
            <h1 className='font-bold text-2xl '>Ready for an Upgrade?</h1>
            <p>Trade in your device and move up to something better.</p>
        </section>
       <section style={{backgroundImage:`url(${mackbook})`}} className='bg-cover bg-center  md:w-[600px] flex flex-col  py-10  w-[100%]  h-[30rem] '>
            <h1 className='font-bold text-2xl '>MacBook Power. Light as Air.</h1>
            <p>Experience unmatched performance and portability with the all-new MacBook lineup.</p>
        </section>
       <section style={{backgroundImage:`url(${ipad})`}} className='bg-cover bg-center  md:w-[600px]  w-[100%]  h-[30rem] flex flex-col  py-10 '>
            <h1 className='font-bold text-2xl '>iPad. Versatile by Design.</h1>
            <p>Whether for work, creativity, or play — iPad adapts to your every need.</p>
        </section>
    </aside>
  )
}

export default Content