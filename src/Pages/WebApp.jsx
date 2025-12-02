import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/ui/Button'

const WebApp = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Header />
      <div className='pt-45 px-30 m-auto'>
        <div>
          <div className='relative rounded-full h-14 w-14 bg-gradient-to-r from-[#FF0000] to-[#3D0000]  '>
            <img src="/Arrow 1.png" alt="" className='absolute left-3 top-5' />
          </div>
          <div className=' flex flex-row gap-2 align-top items-center mt-3'>
            <div className='relative flex gap-2  text-center place-items-baseline'>
              <h1 className='text-red-600 text-5xl font-bold'>01.</h1>
              <h1 className='relative text-white text-start text-3xl font-light mb-5'>
                WEB & APP <br /> DEVELOPMENT

                <span className={`absolute -top-18 -right-28 inline-block text-8xl text-transparent   bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text `} >...</ span>


              </h1>



            </div>


          </div>

        </div>
        <div className='border border-white w-95' />
        <p className='text-white text-xl mt-10'>
          We don't just build websites and apps; we build digital solutions that drive real business growth. Web and app development is about creating an engaging, functional extension of your brand in the digital world, accessible on any device.
        </p>

        <div className='mt-8'>
          <h1 className='text-transparent bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text text-3xl w-70'>
            Web Development
          </h1>

          <p className='text-white text-xl my-5'>
            Web development primarily involves building and maintaining websites and web applications that are accessed through a web <br /> browser. This encompasses:
          </p>
        </div>

        <div className='flex gap-7 mt-6'>
          <div className='border border-white rounded-2xl px-12 pt-10 pb-3'>
            <h1 className='text-transparent bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text text-3xl w-90'>
              Front-end Development
            </h1>

            <p className='text-white text-xl my-5'>
              Creating the user interface (UI) and user experience (UX) that users interact with directly. This involves languages like HTML (for structure), CSS (for styling), and JavaScript (for interactivity).

            </p>

          </div>
          <div className='border border-white rounded-2xl px-12 pt-10 pb-3'>
            <h1 className='text-transparent bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text text-3xl w-90'>
              Back-end Development
            </h1>

            <p className='text-white text-xl my-5'>
              Building the server-side logic, databases, and APIs that power the web application. This involves languages like Python, Ruby, Java, PHP, and frameworks such as Node.js, Ruby on Rails, or Django.
            </p>

          </div>

        </div>
        <div className='border-2 border-white rounded-2xl py-8 px-9 mt-12'>
          <div className='flex gap-24  '>
            <h1 className='text-white text-xl w-'>
              In 2024, our team tackled the challenge of creating a unified, high-performance digital presence across both web and mobile platforms for a delivery company in kenya. The goal was clear, design an intuitive and efficient UI/UX that eliminates friction and maintains brand consistency, regardless of the device in use.

            </h1>
            <img src="/arrow-down.png" alt="arrow down" />

          </div>
          <div className=' mt-10 border border-white w-295' />
          <div className='flex justify-between mt-5'>
            <h1 className='text-white text-l w-70 text-capitalize'>
              WEB APP AND MOBILE <br />
              APP UI AND UX DESIGN
            </h1>
            <Button className='border border-white rounded-2xl text-white font-light text-2xl py-8 px-18'>
              View Website
            </Button>
          </div>

        </div>

        <div className='mt-8'>
          <h1 className='text-transparent bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text text-3xl w-70'>
            Web Development
          </h1>

          <p className='text-white text-xl mt-4'>
            App development focuses on creating applications specifically designed for mobile devices (smartphones and tablets) or desktop computers. This includes:
          </p>
        </div>

        <div className='flex gap-7 mt-6'>
          <div className='border border-white rounded-2xl px-12 pt-10 pb-3'>
            <h1 className='text-transparent bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text text-3xl w-90'>
              Mobile App Development
            </h1>

            <ul className='list-disc mt-3'>
              <li className='text-white mb-3'>
                Native App Development: Building applications specifically for a single platform (iOS using Swift/Objective-C or Android using Java/Kotlin), leveraging device-specific features and performance.
              </li>
              <li className='text-white mb-2'>
                Cross-Platform App Development: Developing applications that can run on multiple platforms (iOS and Android) using frameworks like React Native, Flutter, or Xamarin, aiming for code reusability.
              </li>
            </ul>

          </div>
          <div className='border border-white rounded-2xl px-12 pt-10 pb-3'>
            <h1 className='text-transparent bg-gradient-to-r from-[#FF0000] to-[#3D0000]   bg-clip-text text-3xl w-90'>
              Desktop App Development
            </h1>

            <p className='text-white text-xl my-5'>
              Creating software applications that run directly on a computer's operating system (Windows, macOS, Linux) using languages like C++, Java, or C#.
            </p>

          </div>

        </div>
        <div className='border-2 border-white rounded-2xl py-8 px-9 mt-12'>
          <div className='flex gap-24  '>
            <h1 className='text-white text-xl w-'>
              In 2024, our team tackled the challenge of creating a unified, high-performance digital presence across both web and mobile platforms for a delivery company in kenya. The goal was clear, design an intuitive and efficient UI/UX that eliminates friction and maintains brand consistency, regardless of the device in use.

            </h1>
            <img src="/arrow-down.png" alt="arrow down" />

          </div>
          <div className=' mt-10 border border-white w-295' />
          <div className='flex justify-between mt-5'>
            <h1 className='text-white text-l w-70 text-capitalize'>
              E-COMMERCE <br />
              WEBSITE
            </h1>
            <Button className='border border-white rounded-2xl text-white font-light text-2xl py-8 px-18'>
              View Website
            </Button>
          </div>

        </div>

      </div>
      <div className=' bg-gradient-to-r from-[#FF0000] to-[#3D0000] h-60 mt-10 text-center items-center'>
        <h1 className='text-white text-4xl pt-8 font-bold'>
          For development project we  deliver  
        </h1>
        <p className='text-white mt-5 mx-80'>
          We build solutions that drive growth and deliver seamless user experiences. Contact us today to start <br /> your project!
        </p>
        <Button className='text-white border rounded-xl border-white px-10 mt-4'>
          Contact Us
        </Button>


      </div> 




    </div>
  )
}

export default WebApp
