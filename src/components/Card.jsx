import React from 'react'
import { motion } from 'framer-motion'


const Card = ({ image }) => {
  return (
    <div className='w-[180px] h-[170px] overflow-hidden shrink-0'>
      <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  )
}

export default Card
