import React, { useState, useEffect } from "react";
import {
  FaCircleChevronRight,
  FaCircleChevronLeft
} from "react-icons/fa6";

const Workcarousel = ({ slides, onSlideChange }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // notify parent when current changes
  useEffect(() => {
    if (typeof onSlideChange === 'function') onSlideChange(current);
  }, [current, onSlideChange]);

  return (
    <div className="overflow-x-hidden w-[883.36px] h-[556.18px] relative mx-auto">

      {/* SLIDER TRACK */}
      <div
        className="flex transition-transform ease-out duration-300 bg-linear-to-b from-[#0A0A0A00] to-[#0A0A0AFF]"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <div
            key={index}
            className="relative w-[883.36px] h-[556.18px] shrink-0  "
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover rounded-2xl "
            />



          </div>


        ))}

      </div>


      {/* BUTTONS */}
      <div className="absolute inset-0 flex justify-between items-center text-white px-10 text-3xl">
        <button onClick={previousSlide}><FaCircleChevronLeft /></button>
        <button onClick={nextSlide}><FaCircleChevronRight /></button>
      </div>
    </div>
  );
};

export default Workcarousel;
