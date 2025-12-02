import React from 'react'
import { Button } from './ui/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ number, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultBg = 'bg-gradient-to-br from-[#1A1A1A] to-[#000000]';
  const hoverBg = "bg-gradient-to-r from-[#FF0000] to-[#3D0000]";

  // Map titles to their respective routes
  const titleToRoute = {
    "UX - UI DESIGN": "/uiux",
    "WEB & APP DEVELOPMENT": "/web-app",
    "BRANDING AND CUSTOMIZATION": "/branding-customization",
    "GRAPHIC DESIGN": "/graphic-design",
    "CONTENT CREATION": "/content-creation",
    "DIGITAL MARKETING": "/digital-marketing"
  };

  const route = titleToRoute[title] || "/";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

      className={`relative p-8 border border-white transition-all duration-500 hover:scale-[1.02] ${isHovered ? hoverBg : defaultBg}`}
      style={{
        borderRadius: '30px',
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
      }}
    >
      <div className='flex flex-row gap-2  '>
        <div className='flex'>
          <h2 className={`${isHovered ? 'text-white' : 'text-red-600'} text-4xl`}>
            {number}

          </h2>

          <div className={` border-none rounded-full w-1.5 h-1.5 ${isHovered ? 'bg-white' : 'bg-red-600'}   mt-7 `} />
        </div>


        <h2 className='text-white mt-5 text-3xl h-19 '>
          {title}
        </h2>
        <div className='flex 
        '>
          <div className={`text-5xl text-transparent ${isHovered ? 'bg-white' : 'bg-gradient-to-r from-[#FF0000] to-[#3D0000]'}   bg-clip-text `} >...</ div>
        </div>
      </div>

      <div className='h-px w-full bg-white/40 mb-6' />

      <div className='overflow-hidden transition-all duration-500'>
        <p className='text-sm leading-relaxed text-white/80'>{description}</p>
      </div>
      <Link to={route}>
        <Button className='mt-6 uppercase text-sm border border-white text-white'>
          Show More
        </Button>

      </Link>


    </div>
  )
}

export default ServiceCard
