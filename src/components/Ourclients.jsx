import React from 'react'
import Card from './Card'
import useMeasure from 'react-use-measure';
import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { animate, motion, useAnimation } from 'framer-motion';

const Ourclients = () => {
  const images = [
    "/big-square.png",
    "/testimony.png",
    "kenya-mun.png",
    "/imani.png",
    "/kwachua.png",
    "/kibaria.png",
    "/ktn.png",
    "/motii.png",
    "/location.png"
  ];

  const [ref, { width }] = useMeasure();
  const controls = useAnimation();

  React.useEffect(() => {
    if (!width) return;

    const totalWidth = width / 2 - 4; // width of one set of images
    const duration = 10; // seconds, adjust speed here

    // Infinite linear loop
    controls.start({
      x: [-0, -totalWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
  }, [width, controls]);

  return (
    <div className='h-screen bg-black overflow-hidden'>
      <div className='absolute top-380 left-68 right-80'>
        <div className='flex flex-row items-center gap-5 '>

          <div className=" border border-white/20 rounded-3xl px-8 py-4 flex-none">
            <h2 className="text-5xl font-bold text-red-600 mb-2">Our Clients</h2>
            <p className="text-white">We've worked with <br /> amazing brands</p>
          </div>

          <div className='border-t w-150   border-white/20' />

        </div>

      </div>

      {/* Infinite Carousel */}
      <div className='relative w-full overflow-x-hidden'>
        <div className="absolute left-0 w-[200px] h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-[200px] h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <motion.div
          ref={ref}
          animate={controls}
          className="flex gap-4 mt-70"
        >
          {/* Duplicate images for seamless scroll */}
          {[...images, ...images].map((item, idx) => (
            <Card image={item} key={idx} />
          ))}
        </motion.div>

      </div>

    </div >
  )
}

export default Ourclients
