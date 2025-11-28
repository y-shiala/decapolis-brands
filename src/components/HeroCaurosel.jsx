import React from 'react'
import { useState, useEffect } from 'react';


const slides = [
  {
    title: "slide1",
    image: "/main-bg.png"
  },
  {
    title: "slide2",
    image: "/main-bg.png"
  },
]

const HeroCaurosel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev +1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);  
  
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className='  overflow-x-hidden' >
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={` absolute h-screen top-25 -right-80 transition-opacity  duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} `}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className='w-full h-full object-cover object-center scale-x-310 scale-y-170  ' 
            />

        </div>

      ))}
      
      
    </div>
  )
}

export default HeroCaurosel
