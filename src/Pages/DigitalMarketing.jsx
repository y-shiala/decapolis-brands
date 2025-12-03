import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/ui/Button'
import DigitalCard from '../components/DigitalCard'

const DigitalMarketing = () => {
  const strategies = [
    {
      image: '/tick.png',
      title: 'Social Media Management',
      description: 'Engage followers and grow your presence across all of the social media.',
      text: 'Learn More'
    },
    {
      image: '/search.png',
      title: 'Brand Strategy',
      description: 'Craft a compelling brand story and strategy that resonates with you.',
      text: 'Learn More'
    },
    {
      image: '/message.png',
      title: 'Paid Ads',
      description: 'Drive instant traffic and ROI with on point target and targeted campaigns.',
      text: 'Learn More'
    },
    {
      image: '/tick.png',
      title: 'Email & SMS Marketing',
      description: 'Engage followers and grow your presence across all of the social media.',
      text: 'Learn More'
    },
    {
      image: '/search.png',
      title: 'Content Markrting',
      description: 'Craft a compelling brand story and strategy that resonates with you.',
      text: 'Learn More'
    },
    {
      image: '/message.png',
      title: 'Influencer Marketing',
      description: 'Drive instant traffic and ROI with on point target and targeted campaigns.',
      text: 'Learn More'
    },
  ]
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
                DIGITAL MARKETING          

                <span className={`absolute -top-18 -right-28 inline-block text-8xl text-transparent   bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text `} >...</ span>


              </h1>



            </div>


          </div>

        </div>
        <div className='border border-white w-95' />
        <p className='text-white text-l w-280 mt-10'>
          We help brands grow online through strategic, data-driven digital marketing solutions. From social media management and targeted ads to content strategy, SEO, and brand engagement, we create campaigns that drive real results. Our approach combines creativity with analytics to ensure your brand reaches the right audience, at the right time, with the right message. Whether you’re looking to increase visibility, boost sales, or build a strong online community, we deliver digital marketing strategies designed to elevate your brand and achieve measurable growth.
        </p>

        <div>
        <div className='w-[90%] flex flex-wrap gap-10  justify-between  mt-15   '>
          {strategies.map((strategy, index) => (
            <DigitalCard
              key={index}
              image={strategy.image}
              title={strategy.title}
              description={strategy.description}
              text={strategy.text} 
            
            />
          ))}

        </div>
        
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
          CONTACT US
        </Button>


      </div>

    </div>
  )
}

export default DigitalMarketing
