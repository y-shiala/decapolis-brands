import React from 'react'
import ServiceCard from '../components/ServiceCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { main } from 'framer-motion/client'

const Expertise = () => {
  const services = [
    {
      number: "01",
      title: "UX - UI DESIGN",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ut wisi enim ad minim veniam",
      
    },
    {
      number: "02",
      title: "WEB & APP DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ut wisi enim ad minim veniam",
      
    },
    {
      number: "03",
      title: "BRANDING AND CUSTOMIZATION",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ut wisi enim ad minim veniam",
      
    },
    {
      number: "04",
      title: "GRAPHIC DESIGN",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ut wisi enim ad minim veniam",
      
    },
    {
      number: "05",
      title: "CONTENT CREATION",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ut wisi enim ad minim veniam",
      
    },
    {
      number: "06",
      title: "DIGITAL MARKETING",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ut wisi enim ad minim veniam",
      
    }
  ];

  return (
   <main className='min-h-screen bg-black'>
    <Header />

    <section className='max-w-7xl mx-auto px-56 py-50'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
        {services.map((services, index) => (
          <ServiceCard
            key={index}
            number={services.number}
            title={services.title}
            description={services.description}

          
          />
        ))}
      </div>

    </section>

   </main>
  )
}

export default Expertise
