import { useState } from 'react'
import Header from '../components/Header';
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ firstName: ", phone: ", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='min-h-screen bg-black'>
      <Header />

      <div className='px-30 pt-40 m-auto'>
        <div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20'>
            <div className='space-y-8 '>
              <h1 className='text-4xl md:text-5xl font-bold text-white'>
                Get inTouch
              </h1>
              <p className='text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>

              <div className='flex'>
                <img src="/socials.png" alt="" />

              </div>
              <div className="mt-13">
                <h1 className="text-white mb-16">Get in Touch</h1>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-2">
                    <IoLocationOutline className="text-white text-2xl" />
                    <p className="text-white/40">Thika,Kenya</p>
                  </div>
                  <div className="flex gap-2">
                    <MdMailOutline className="text-white text-2xl" />
                    <p className="text-white/40">info@decapolisbrands.com</p>
                  </div>
                  <div className="flex gap-2">
                    <MdOutlineLocalPhone className="text-white text-2xl" />
                    <p className="text-white/40">+254 793 969 455</p>
                  </div>

                </div>

              </div>

            </div>

            <div>
              <h2 className='text-2xl font-semibold'>
                Let's Work Together
              </h2>
              <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                  <label className='block text-sm text-white mb-2'>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 bg-white border rounded-lg text-black placeholder:text-gray-200 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className='block text-sm text-white mb-2'>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Include Country Code"
                    className="w-full px-4 py-3 bg-white border rounded-lg text-black "

                  />
                </div>
                <div>
                  <label className='block text-sm text-white mb-2'>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border rounded-lg text-black "
                    required
                  />
                </div>
                <div>
                  <label className='block text-sm text-white mb-2'>
                    Message
                  </label>
                  <textarea

                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full px-4 py-3 bg-white border rounded-lg text-black "
                    rows={4}
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='px-8 py-3 bg-gradient-to-r from-[#FF0000] to-[#3D0000] text-white rounded-lg font-medium'
                >
                  Send
                </button>


              </form>
            </div>

          </div>


        </div>

      </div>
      <div className='w-full pt-12 overflow-x-hidden'>
        <img src="/map.png" alt="" className='w-full block max-w-full h-auto' />
      </div>



    </div>
  )
}

export default ContactUs
