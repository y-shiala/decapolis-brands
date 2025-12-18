import React, { useState } from 'react'
import Workcarousel from './Workcarousel'

const slides = [
  {
    title: "Product Designs",
    image: "/beelive.png"
  },
 
  {
    title: "Logo Designs",
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
    title: "Content Creation",
    image: "/content-creation.jpg"
  },
]


const Ourwork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className=' bg-black h-screen'>
      <div className='relative w-[60%] m-auto pt-4  '>

        <Workcarousel slides={slides} onSlideChange={(idx) => setCurrentIndex(idx)} />

        <div className=' absolute top-125 left-85 border border-white/20 rounded-2xl bg-black/30 w-70 h-40 '>
          <img src="/vector-red.png" alt="" className='absolute left-1 top-3 w-full scale-98' />
          <h1 className='text-white text-left ml-20 mt-8 text-2xl w-32 items-center '>{slides[currentIndex]?.title}</h1>

        </div>


      </div>

    </div>
  )
}

export default Ourwork
