import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/ui/Button'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
// removed unused import

const categories = [
  { label: 'Social Media Content', path: 'media' },
  { label: 'Product and  Portrait photography', path: 'photography' },
  { label: 'Ad Content', path: 'ad-content' },
  { label: 'Video production', path: 'packaging-and-merch' },
];

const ContentCreation = () => {
  const [activeCategory, setActiveCategory] = useState('media');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts[0] === 'content-creation') {
      const cat = parts[1] || 'media';
      if (categories.some(c => c.path === cat)) setActiveCategory(cat);
    }
  }, [location.pathname]);

  const SocialMediaContent = () => (
    <div className='flex gap-15 mt-5'>
      <div>
        <div className='bg-white rounded-xl h-165 w-155'></div>
      </div>
      <div className='flex flex-col  justify-center  text-white'>
        <h1 className='text-3xl mb-10'>
          Short-form videos, reels, Tiktok <br /> clips, and Instagram stories
        </h1>
        <p className='text-sm w-sm text-white/70'>
          We create engaging short-form videos, including reels, TikTok clips, and Instagram stories, designed to capture attention, boost engagement, and grow your brand’s online presence.
        </p>
        <div className='flex gap-30 m-10 items-center justify-center'>
          <img src="/content-left.png" alt="left arrow" />
          <img src="/content-right.png" alt="right arrow" />
        </div>
      </div>

    </div>
  );

  const ProductAndPotraitPhotography = () => (
    <div className='bg-black h-160'>

    </div>
  );

  const AdContent = () => (
    <div className='bg-black h-160'>

    </div>
  );

  const VideoProduction = () => (
    <div className='bg-black h-160'>

    </div>
  )


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
              <h1 className='text-red-600 text-5xl font-bold'>05.</h1>
              <h1 className='relative text-white text-start text-3xl font-light mb-5'>
                CONTENT CREATION

                <span className={`absolute -top-18 -right-28 inline-block text-8xl text-transparent   bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text `} >...</span>


              </h1>



            </div>


          </div>

        </div>
        <div className='border border-white w-95' />
        <p className='text-white text-lg mt-10'>
          At Decapolis Brands, our Content House is a one-stop creative hub designed to produce high-quality, engaging content for brands that want to stand out. From short-form social media videos, reels, and ads to professional photography, motion graphics, and branded visuals, we bring every idea to life under one roof. <br />
          <br />

          Our team of creators, designers, and storytellers collaborates to craft content that drives engagement, boosts visibility, and connects your brand with the right audience. Whether you’re launching a new product, running a campaign, or building your digital presence, our Content House delivers consistent, creative, and impactful visuals tailored to your brand identity.
        </p>


        <div className='mt-8'>
          <nav className='flex justify-between gap-4  pb-2'>
            {categories.map((c) => (


              <button
                key={c.path}
                onClick={() => {
                  setActiveCategory(c.path);
                  navigate(`/content-creation/${c.path}`);
                }}
                className={`relative px-18 py-6 text-xl text-left w-lg bg-white/5 rounded-md border ${activeCategory === c.path ? 'bg-white/5 border-white text-red-600' : 'bg-transparent border-white/20 text-white/70'}`}
              >
                {c.label}

                {activeCategory === c.path && (
                  <img
                    src="/red-v.png"
                    alt=""
                    className="absolute  w-full h-full   scale-[90%] top-1 left-1 right-15 bottom-3 "
                  />
                )}
              </button>
            ))}
          </nav>
          {/* Category content renders inline below the tabs */}
          <section>
            {activeCategory === 'media' && <SocialMediaContent />}
            {activeCategory === 'photography' && <ProductAndPotraitPhotography />}
            {activeCategory === 'ad-content' && <AdContent />}
            {activeCategory === 'packaging-and-merch' && <VideoProduction />}

          </section>


        </div>


      </div>


    </div>
  )
}

export default ContentCreation
