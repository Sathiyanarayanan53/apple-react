import React from 'react'
import Image from './images/mothersection.jpg'

const Mother = () => {
   return (
    <section className='w-[100%] min-h-[400px] md:h-[800px] mt-4 flex justify-center py-8 items-end bg-center bg-cover ' style={{backgroundImage:`url(${Image})`}}>
        <article className='flex justify-center flex-col text-center text-sm md:text-lg'>
            <h2 className='font-bold text-2xl pb-2'>Valentine's Day</h2>
            <p className='pb-1'>CELEBRATE LOVE WITH THE PERFECT GIFT FOR YOUR SWEETHEART!</p>
            <div>
                <button className='text-white bg-blue-600 rounded-lg p-2 mt-2' type="button">Shop Now</button>
            </div>
        </article>
    </section>
  )
}

export default Mother