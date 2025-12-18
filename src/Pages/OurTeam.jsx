import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/ui/Button'
import TeamCard from '../components/TeamCard';

const teamMembers = [
  { name: "David Mwangi", role: "Co-founder and Chief Executive Office" },
  { name: "John Muevi", role: "Co-founder / Marketing and Sales Lead" },
  { name: "Ian Waiyaki", role: "Co-founder / Finance Lead" },
  { name: "George K", role: "Graphic Designer" },
  { name: "Yvonnah S.", role: "Admin / Front end Developer" },
  { name: "Moses K.", role: "Digital Strategist" },
  { name: "Anthony M.", role: "Videographer / filmaker" },
  { name: "Trizah", role: "UI/UX Designer" },
];
const OurTeam = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Header />
      <div className='px-30 m-auto'>
        <section className='relative py-46'>
          <img src="/team1.png" alt="gear image" className='absolute left-8 top-43 ' />
          <img src="/team2.png" alt="gear image" className='absolute right-8 top-43 ' />

          <div className="absolute left-120 top-39 w-68 border border-none border-white rounded-3xl p-8 bg-white/5 flex-none items-center justify-center ">
            <h2 className="text-5xl font-bold text-white m-0"><span className="text-red-600">Our</span>Team</h2>

          </div>
          <p className='absolute left-95 top-70  text-white text-center w-120'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae itaque iste laborum dicta dolor! Sed non consequuntur neque mollitia laboriosam dignissimos, nisi voluptates, placeat cumque molestias, repellendus quaerat tempora ullam?

          </p>

        </section>

        <div>
          <div className='grid grid-cols-4 gap-6 mt-15'>
            {teamMembers.map((member, index) => (
              <TeamCard 
                key={member.name}
                name={member.name}
                role={member.role}
                delay={index * 100}
              />
            ))}

          </div>
        </div>

      </div>

    </div>
  )
}

export default OurTeam
