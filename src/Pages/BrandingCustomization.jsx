import React from 'react'
import Header from '../components/Header'
import BrandingCard from '../components/BrandingCard'
import { productCategories } from '../constants'
import { Button } from '../components/ui/Button'

const BrandingCustomization = () => {



  return (
    <div className='min-h-screen bg-black'>
      <Header />
      <div className='pt-45 px-30 m-auto'>
        <div>
          <div className='relative rounded-full h-14 w-14 bg-gradient-to-r from-[#FF0000] to-[#3D0000]  '>
            <img src="/Arrow 1.png" alt="" className='absolute left-3 top-5' />
          </div>
          <div className=' flex flex-row gap-2 align-top items-center mt-3'>
            <div className='relative flex gap-2  text-center place-items-baseline'>
              <h1 className='text-red-600 text-5xl font-bold'>01.</h1>
              <h1 className='relative text-white text-start text-3xl font-light mb-5'>
                BRANDING AND <br /> CUSTOMIZARION

                <span className={`absolute -top-18 -right-28 inline-block text-8xl text-transparent   bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text `} >...</ span>


              </h1>



            </div>


          </div>

        </div>
        <div className='border border-white w-95' />
        <p className='text-white text-xl mt-10'>
          We don't just build websites and apps; we build digital solutions that drive real business growth. Web and app development is about creating an engaging, functional extension of your brand in the digital world, accessible on any device.
        </p>

        <div className='grid grid-cols-2 gap-12 mt-49 gap-y-49 '>
          {Object.entries(productCategories).map(([categoryName, items]) => (
            <BrandingCard
              key={categoryName}
              title={categoryName}
              items={items}
              buttonText="View Catalogue"
              className='mb-10'
            />
          ))}

        </div>

      </div>
      <div className=' bg-gradient-to-r from-[#FF0000] to-[#3D0000] h-60 mt-10 text-center items-center'>
        <h1 className='text-white text-4xl pt-8 font-bold'>
          For development project we  deliver
        </h1>
        <p className='text-white mt-5 mx-80'>
          We build solutions that drive growth and deliver seamless user experiences. Contact us today to start <br /> your project!
        </p>
        <Button className='text-white border rounded-xl border-white px-10 mt-4'>
          Contact Us
        </Button>


      </div>


    </div>
  )
}

export default BrandingCustomization
