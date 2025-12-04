import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

const Header = () => {
  const navlinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "AboutUs" },
    { href: "/expertise", label: "Expertise" },
    { href: "/", label: "Case Studies" },
    { href: "/", label: "Our Team" },
    { href: "/", label: "ContactUs" }
  ]
  return (
    <div className="absolute top-0 left-0 w-full z-200 ">
      <div className=" mx-auto max-w-[1400px] flex flex-row justify-between  gap-25 items-center sticky bg-transparent top-0 z-20 ">

      <Link to="/">
        <div className="h-45  w-auto flex items-center">
          <img src="/logo1.png" alt="logo" className=" h-full w-auto " />

        </div>


      </Link>
      <nav className="flex flex-col gap-3 items-center">


        <ul className="flex flex-row justify-center items-center gap-10 mb-5">
          {navlinks.map((link) => (
            <li key={link.label}>
              <a className="text-white hover:text-red-600 font-bold text-xl" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className=" w-full border border-white/20 " />

      </nav>
      <Button variant="custom"  className="bg-gradient-to-r from-[#FF0000] to-[#3D0000] mr-10 text-white p-4!">
        <img src="chip.png" alt="" />
        Our Portfolio
      </Button>
    </div>

    </div>
    
    
  )
}

export default Header;
