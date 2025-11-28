import { Link } from "react-router-dom"
import { TfiInstagram } from "react-icons/tfi";
import { li } from "framer-motion/client";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  const navlinks = [
    
    { href: "/", label: "AboutUs" },
    { href: "/", label: "Expertise" },
    { href: "/", label: "Case Studies" },
    { href: "/", label: "Our Team" },

  ];

 

  const services = [
    { title: "Graphic Design"},
    { title: "Web Design"},
    { title: "Content Creation"},
    { title: "Customization"},
    { title: "Digital Marketing"},
    { title: "Burgeon Institution"},
    
  ];

  return (
    <div className='bg-black p-4 '>
      <div className='flex flex-row justify-between border-t-2 border-white/30 w-[80%] m-auto'>
        <div className="">
          <Link to="/">
            <div className="h-35 p-0 w-auto flex items-center">
              <img src="logo2.png" alt="logo" className=" h-full w-auto " />

            </div>
          </Link>
          <p className="text-white/40 w-45 mb-5 ">
            We are a creative digital agency ,
            we will make you visible, a city that
            can’t be hid
          </p>
          <div className="flex flex-row gap-2">
            <TfiInstagram className="text-white text-l" />
            <TfiInstagram className="text-white text-l" />
            <div className="  ">
              <TfiInstagram className="  text-white text-l" />

            </div>

            <TfiInstagram className="text-white text-l" />
            <TfiInstagram className="text-white text-l" />

          </div>

        </div>
        <div className="mt-13">
          <h1 className="text-white mb-16">Company</h1>

          <ul className=" flex flex-col gap-2">
            {navlinks.map((link) => (
            <li key={link.label}>
              <a className="text-white/40 hover:text-red-600" href={link.href}>{link.label}</a>
            </li>
          ))}

          </ul>
        </div>

        <div className="mt-13">
          <h1 className=" text-white mb-16">Services</h1>

          <ul>
            {services.map((s, index) => (
              <li key={index} className="text-white/40" >{s.title} </li>
            ))}
          </ul>
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

    </div>
  )
}

export default Footer
