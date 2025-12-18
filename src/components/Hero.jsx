import React from 'react'
import HeroCaurosel from './HeroCaurosel'
import Header from './Header'




const Hero = () => {
  return (
    <div className='relative z-10 bg-black h-[850px] text-white overflow-hidden '>
      <HeroCaurosel />
      

      <div>
        <div className="absolute left-29 top-34 ">
          <img src="line.png" alt="" className='h-50' />
        </div>
      </div>

      <div className=" absolute left-28 top-88 flex flex-col gap-3">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-black/30 border-2 border-black-600" />
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white" />

      </div>

      <div>
        <div className="absolute left-29 top-114 ">
          <img src="line.png" alt="" className='h-50' />

        </div>
      </div>
      <div className='absolute top-139 left-116'>
        <h1 className='text-4xl text-white/90 font-bold'>You Can't <br /> Be Hid</h1>
      </div>
      <div className='absolute top-129 left-100'>
        <img src="/Layer_1.png" alt="" className='w-70' />
      </div>
      <div className='absolute top-62 left-100'>
        <img src="/vector-16.png" alt="" className='' />
      </div>
      <div className='absolute top-43 right-2'>
        <img src="/vector-17.png" alt="" className='' />
      </div>
      <div className='absolute top-149 left-170'>
        <img src="/vector-18.png" alt="" className='h-40' />
      </div>
      <div className='absolute right-55  top-82 font-Afacade '>

        <h1 className='mr-10 text-end font-bold text-5xl '>
          We are
        </h1>
        <h1 className=' font-bold text-end text-8xl text-gradient-red bg-clip-text text-transparent  '>

          digital
          <br />
          agency

        </h1>

      </div>
      <div className='absolute top-180 left-68 right-90'>
        <div className='flex flex-row items-center gap-5 '>
          <div className='border-t w-150   border-white/20' />

          <div className=" border-2 border-white/20 rounded-3xl px-10 py-4 flex-none">
            <h2 className="text-5xl font-bold text-red-600 mb-2">Our Work</h2>
            <p className="text-foreground">We are Good at what we do</p>
          </div>

        </div>
        
      </div>


     


    </div>
  )
}

export default Hero
