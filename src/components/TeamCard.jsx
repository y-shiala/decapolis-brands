import React from 'react'

const TeamCard = ({ name, role, delay = 0 }) => {
  return (
    <div className='relative  bg-white/5 pt-26 pb-18 z-1 mt-5 px-20 rounded-lg flex flex-col  items-center text-center'>
      <div>

      </div>
      <div className='-mt-35 overflow-hidden w-42 h-42 rounded-full  bg-gray-400 '>
        <div className=''>

        </div>

      </div>
      <h3 className='pt-10 text-lg font-semibold text-white '>
        {name}
      </h3>
      <p className='text-sm text-white/10'>
        {role}
      </p>

    </div>
  )
}

export default TeamCard
