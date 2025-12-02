import React from 'react'
import Header from '../components/Header'
import { div, h1 } from 'framer-motion/client'
import { Button } from '../components/ui/Button'

const UxUi = () => {
  const cards = [
    {
      number: '1.',
      title: 'Research',
      description1: 'This is the foundation where you gather information about user needs, business goals, and competitors.',
      description2: 'Key activities include user interviews, surveys, and creating user personas to define the target audience and their pain points.',

    },
    {
      number: '2.',
      title: 'Design',
      description1: 'This stage involves using the insights from research to create the product.',
      description2: 'It includes creating a site map, information architecture, and user flows.',
      description3: 'Wireframes (the basic structure), mockups (visual designs), and interactive prototypes (simulations of the final product) are built during this phase.',

    },
    {
      number: '3.',
      title: 'Testing',
      description1: 'The goal is to evaluate the designs with real users to see if the product is intuitive and meets their needs.',
      description2: 'This is an iterative process where feedback is collected to identify usability issues.',
      description3: 'The insights from testing are used to refine and improve the design, often leading back to the design phase for adjustments.',

    },
  ]


  return (
    <div className='min-h-screen bg-black '>
      <Header />
      <div className='pt-45 px-30 m-auto'>
        <div>
          <div className='relative rounded-full h-14 w-14 bg-gradient-to-r from-[#FF0000] to-[#3D0000]  '>
            <img src="/Arrow 1.png" alt="" className='absolute left-3 top-5' />
          </div>
          <div className=' flex flex-row gap-2 align-top items-center'>
            <div className='relative flex gap-2  text-center place-items-baseline'>
              <h1 className='text-red-600 text-5xl font-bold'>01.</h1>
              <h1 className='relative text-white  text-3xl font-light mb-5'>
                UX - UI DESIGN
                
                <span className={`absolute -top-18 -right-28 inline-block text-8xl text-transparent   bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text `} >...</ span>

            
              </h1>
             


            </div>


          </div>

        </div>
        <div className='border border-white w-95' />

        <p className='text-white text-2xl mt-15'>This is the process of mapping out the user's entire interaction with a product to make it logical, intuitive, and enjoyable. from your website to your mobile application</p>

        <div className='mt-15'>
          <div className='flex flex-row gap-5'>
            {cards.map((card, index) => (
              <div
                key={index}
                className='flex flex-col gap-5 py-10 px-14 border text-white border-white rounded-2xl flex-1'>
                <div className='flex gap-3 justify-center items-center text-red-600'>
                  <p className='text-2xl'>{card.number}</p>
                  <h1 className='text-2xl'>{card.title}</h1>
                </div>
                <ul className='list-disc'>
                  <li className='mb-4'>{card.description1}</li>
                  <li className='mb-4'>{card.description2}</li>
                  <li className='mb-4'>{card.description3}</li>
                </ul>

              </div>
            ))}

          </div>

        </div>

        <div className='flex flex-row gap-5 mt-10 '>
          <div className='bg-white border rounded-2xl w-[50%]' />
          <div className='bg-white rounded-2xl w-[50%] h-140' />

        </div>

        <div className='border-2 border-white rounded-2xl py-8 px-9 mt-7'>
          <div className='flex gap-24  '>
            <h1 className='text-white text-xl w-'>
              In 2024, our team tackled the challenge of creating a unified, high-performance digital presence across both web and mobile platforms for a delivery company in kenya. The goal was clear, design an intuitive and efficient UI/UX that eliminates friction and maintains brand consistency, regardless of the device in use.

            </h1>
            <img src="/arrow-down.png" alt="arrow down" />

          </div>
          <div className=' mt-10 border border-white w-295' />
          <div className='flex justify-between mt-5'>
            <h1 className='text-white text-l w-70 text-capitalize'>
              WEB APP AND MOBILE <br />
              APP UI AND UX DESIGN
            </h1>
            <Button className='border border-white text-white text-2xl py-7 px-18'>
              View on Figma
            </Button>
          </div>

        </div>

      </div>
      <div className=' bg-gradient-to-r from-[#FF0000] to-[#3D0000] h-60 mt-10 text-center items-center'>
        <h1 className='text-white text-4xl pt-8 font-bold'>
          Let’s Create your UI/UX Project
        </h1>
        <p className='text-white mt-5 mx-80'>
          We transform brands into personalities. Our team develops bespoke brand and corporate characters <br /> that are seamlessly integrated into your UI/UX design, making user interactions intuitive, engaging, <br /> and memorable.
        </p>
        <Button className='text-white border border-white px-10 mt-4'>
          Contact Us
        </Button>


      </div>





    </div>
  )
}

export default UxUi
