import React from 'react'
import Image from "./images/watch.jpg"
import { FaApple } from 'react-icons/fa'
const Mothertwo = () => {
  return (
    <section className='w-[100%] min-h-[400px] md:h-[800px]  mt-4 flex justify-center py-8  bg-center bg-cover ' style={{backgroundImage:`url(${Image})`}}>
            <article className=' text-center text-sm md:text-lg '>
                <h2 className='flex gap-1 items-center justify-center font-bold text-2xl '><FaApple/>iWatch</h2>
                <p className='pb-2 mt-2 '>STAY CONNECTED AND STYLISH WITH THE LATEST APPLE WATCH!</p>
                <div>
                    <button className='text-white bg-blue-600 rounded-lg p-2' type="button">Shop Now</button>
                </div>
            </article>
        </section>
  )
}

export default Mothertwo