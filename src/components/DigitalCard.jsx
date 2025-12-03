import React from 'react'
import { Button } from './ui/Button'


const DigitalCard = ({ image, title, description, text }) => {
  return (
    <div className=' border border-white/20 px-10 py-8  h-83 w-80 rounded-2xl bg-white/10'>
      <div className='relative rounded-full h-16 w-16 bg-gradient-to-r from-[#FF0000] to-[#3D0000]  '>
        <img src={image} alt={title} className='absolute left-4 top-4' />
      </div>
      <h2 className='text-white mt-2 font-light  text-2xl'>
        {title}
      </h2>
      <p className='text-white/70 w-49 '>
        {description}
      </p>
       <Button className='border-none rounded-xl bg-gradient-to-r from-[#FF0000] to-[#3D0000] text-white mt-5 '>
          {text}
       </Button>
    </div>
  )
}

export default DigitalCard
