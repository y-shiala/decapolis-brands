import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Ourwork from '../components/Ourwork'
import Ourclients from '../components/Ourclients'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Ourwork />
        <Ourclients />
      </main>
      
    </div>
  )
}

export default Index
