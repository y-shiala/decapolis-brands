import { li } from 'framer-motion/client'
import React from 'react'
import { Button } from './ui/Button'

const BrandingCard = ({ title, items, buttonText,  }) => {
  return (
    <div className='relative bg-black border border-white  rounded-2xl   px-12 pt-15 h-134 flex flex-col '>
      <ul className='list-disc list-inside flex-1'>
        {items.map((item, index) => (
          <li key={index} className='text-white  '>
            {item}
          </li>
        ))}
      </ul>
      <div className='border-t border-white w-full mt-4' />
      <div className='flex justify-between py-4'>
        <h1 className='text-white w-40'>
          {title}
        </h1>


        <Button className='border   border-white rounded-xl text-white'>
          {buttonText}

        </Button>

      </div>

      <div className='absolute -top-42 left-70 bg-white rounded-xl w-80 h-80'>

      </div>
      <div className='absolute top-70 left-130'>
        <img src="/arrow-down2.png" alt="" />
      </div>



    </div>
  )
}

export default BrandingCard
