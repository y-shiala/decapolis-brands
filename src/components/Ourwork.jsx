import React from 'react'
import Workcarousel from './Workcarousel'
import { h1 } from 'framer-motion/client'

const slides = [
  {
    title: "Product Designs",
    image: "/beelive.png"
  },
  {
    title: "believe",
    image: "/beelive.png"
  },
  {
    title: "Logo designs",
    image: "/logo-design.png"
  },
  {
    title: "Social Media Marketing",
    image: "/social-media.png"
  },
  {
    title: "Web Design and Development",
    image: "/web-design.png"
  },
  {
    title: "believe",
    image: "/content-creation.jpg"
  },
]


const Ourwork = () => {
  return (
    <div className=' bg-black h-screen'>
      <div className='relative w-[60%] m-auto pt-4  '>
        
        <Workcarousel slides={slides} />

        <div className=' absolute top-125 left-85 border border-white/20 rounded-2xl bg-black/30 w-70 h-40 '>
        <img src="/vector-red.png" alt="" className='absolute left-5 top-3' />
        {slides.map((s) => (
          <h1>{s.title}</h1>

        ))}
        
          
        </div>


      </div>

    </div>
  )
}

export default Ourwork
