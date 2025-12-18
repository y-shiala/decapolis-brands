import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/ui/Button'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { div } from 'framer-motion/client';

const categories = [
  { label: 'Logos', path: 'logos' },
  { label: 'Posters', path: 'posters' },
  { label: 'Publications', path: 'publications' },
  { label: 'Packaging and Merch', path: 'packaging-and-merch' },
  { label: 'Motion Graphics', path: 'motion-graphics' },
];

const GraphicDesign = () => {
  const [activeCategory, setActiveCategory] = useState('logos');
  const navigate = useNavigate();
  const location = useLocation();

  // Keep activeCategory in sync with the URL so direct links work
  useEffect(() => {
    const parts = location.pathname.split('/').filter(Boolean); // ['graphic-design', 'posters']
    if (parts[0] === 'graphic-design') {
      const cat = parts[1] || 'logos';
      if (categories.some(c => c.path === cat)) setActiveCategory(cat);
    }
  }, [location.pathname]);

  /* Small inline content components for each category (rendered below tabs)
     These mirror the placeholder grids created as separate pages but keep
     the content inside this page so selecting a tab shows the content inline. */
  const LogosContent = () => (
    <div className='relative mt-8 grid grid-cols-2 gap-6'>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className=' bg-white rounded-xl h-128 flex items-center justify-center'>
          <span className='text-white/60'>Logo {i + 1}</span>
        </div>
      ))}
      <div className='absolute top-30 -left-10 rounded-xl w-100 h-70 bg-white' />
      <div className='absolute bottom-30 -left-10 rounded-xl w-100 h-70 bg-white' />
    </div>
  );

  const PostersContent = () => (
    <div className='mt-8 grid grid-cols-4 gap-4 w-full'>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className='flex items-center justify-center p-0'>
          <img src="/outpour.png" alt="" className='w-full h-full object-cover' />
        </div>
      ))}
    </div>
  );

  const PublicationsContent = () => (
    <div className='mt-8 grid grid-row-2 gap-6'>
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className='bg-white rounded-xl h-128 flex  items-center justify-center'>

        </div>
      ))}
    </div>
  );

  const PackagingContent = () => (
    <div className='mt-8 grid grid-row-3 gap-6'>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className='bg-white rounded-xl h-118 flex items-center justify-center'>

        </div>
      ))}
    </div>
  );

  const MotionContent = () => (
    <div className='mt-8 grid grid-row-2 gap-6'>
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className='bg-white rounded-xl h-128 flex items-center justify-center'>

        </div>
      ))}
    </div>
  );

   
  return (
    <div className='min-h-screen bg-black'>
      <Header />

      <div className='pt-45 px-30 m-auto'>
        <div>
          <div
            onClick={() => navigate('/expertise')}
            className='relative rounded-full h-14 w-14 bg-gradient-to-r from-[#FF0000] to-[#3D0000] cursor-pointer hover:opacity-80 transition-opacity'
          >
            <img src="/Arrow 1.png" alt="Go to expertise" className='absolute left-3 top-5' />
          </div>
          <div className=' flex flex-row gap-2 align-top items-center mt-3'>
            <div className='relative flex gap-2  text-center place-items-baseline'>
              <h1 className='text-red-600 text-5xl font-bold'>01.</h1>
              <h1 className='relative text-white text-start text-3xl font-light mb-5'>
                GRAPHIC DESIGN

                <span className={`absolute -top-18 -right-28 inline-block text-8xl text-transparent   bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text `} >...</ span>


              </h1>


            </div>


          </div>

        </div>
        <div className='border border-white w-95' />
        <p className='text-white text-xl mt-10'>
          At Decapolis Brands, we believe great design is more than visuals it’s communication. Our graphic design services are crafted to help businesses tell their story clearly, creatively, and confidently. We combine strategic thinking with artistic expertise to produce designs that captivate your audience and strengthen your brand identity. Whether you’re building a new brand or elevating an existing one, we deliver visuals that are purposeful, memorable, and aligned with your business goals.
        </p>

        {/* Filter tabs - highlighted space */}
        <div className='mt-8'>
          <nav className='flex justify-between gap-4  pb-2'>
            {categories.map((c) => (


              <button
                key={c.path}
                onClick={() => {
                  setActiveCategory(c.path);
                  navigate(`/graphic-design/${c.path}`);
                }}
                className={`relative px-16 py-6 text-2xl bg-white/5 rounded-md border ${activeCategory === c.path ? 'bg-white/5 border-white text-red-600' : 'bg-transparent border-white/20 text-white/70'}`}
              >
                {c.label}

                {activeCategory === c.path && (
                  <img
                    src="/red-v.png"
                    alt=""
                    className="absolute  w-full h-full   scale-[70%] top-1 left-1 right-8 bottom-3 "
                  />
                )}
              </button>
            ))}
          </nav>
          {/* Category content renders inline below the tabs */}
          <section>
            {activeCategory === 'logos' && <LogosContent />}
            {activeCategory === 'posters' && <PostersContent />}
            {activeCategory === 'publications' && <PublicationsContent />}
            {activeCategory === 'packaging-and-merch' && <PackagingContent />}
            {activeCategory === 'motion-graphics' && <MotionContent />}
          </section>


        </div>



      </div>



      <div className=' bg-gradient-to-r from-[#FF0000] to-[#3D0000] h-60 mt-10 text-center items-center'>
        <h1 className='text-white text-4xl pt-8 font-bold'>
          Logo  Design Services That Bring Your Brand to Life
        </h1>
        <p className='text-white mt-5 mx-80'>
          Professional logo design that tells your story. THEY ARE Simple, timeless, and unforgettable brand identities.
        </p>
        <Button className='text-white border rounded-xl border-white px-10 mt-4'>
          CONTACT US
        </Button>




      </div>

    </div>
  )
}

export default GraphicDesign

