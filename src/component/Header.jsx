import React from 'react';
import headimg from './images/herosection.jpg'

const Header = () => {
  return (
    <main   className=" text-white shadow-lg flex flex-col py-20 items-center w-full min-h-80 md:h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${headimg})` }}>
        <h1 className='font-bold text-4xl pb-4'>iPhone</h1>
        <h3 className='text-2xl pb-2'>Meet the IPhone 16 Pro</h3>
        <section className='items-center py-4'>
            <button className='bg-blue-600 rounded-lg p-2 mx-4 hover:bg-blue-700 '>Learn More</button>
            <button className='border-2  border-blue-600 py-2 rounded-lg w-16 h-10 active:bg-blue-700 transistion duration-75 '> Buy</button>
        </section>

    </main>
  )
}

export default Header