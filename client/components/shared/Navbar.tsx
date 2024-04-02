import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { NavService } from "./NavServices";
import { NavAbout } from "./NavAbout";

const Navbar = () => {
  return (
    <nav>
    <div className=" mx-auto px-4 py-5 flex justify-around items-center bg-primary-50">
      {/* Logo and Church Name */}  
      <div className="flex items-center">
        {/* Church Logo */}
        <Image
          src="/assets/ChurchLogo.png"
          alt="Church logo"
          width={70}
          height={28}
        />
        {/* Church Name */}
        <div className="flex flex-col mt-3 ml-1 md:mr-5  text-black text-center w-[75%] md:w-[90%]">
          <h1 className=" text-lg md:text-2xl font-extrabold">
            St.Antony&apos;s Jacobite Syrian Orthodox Cathedral
          </h1>
          <p className="text-xs  md:text-sm  md:w-[85%] md:ml-[50px] text-black ">Under the Holy Apostolic See of Antioch and All the East & St Anthony&apos;s Educational Society Honnavar (Public Trust F-17 Karwar Registered under Charitable Societies Act)</p>
        </div>
      </div>
      {/* Navigation Links */}
      <ul className="hidden md:flex text-black font-extrabold space-x-8">
        <li>
          <NavAbout />  
        </li>
        <li>
          <NavService />
        </li>
        <li className="dropdown mt-1 hover:text-gray-400">
          <Link href="/events">Events</Link>
        </li>
        <li className="dropdown mt-1 hover:text-gray-400">
          <Link href="/relics">Relics</Link>
        </li>
        <li className="mt-1">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="mt-1">
          <Link href="#contactUs">Contact</Link>
        </li>
      </ul>
      {/* Hamburger Menu for Mobile */}
      <button className="md:hidden focus:outline-none text-white hover:text-gray-400">
        <MobileNav />
      </button>
    </div>
  </nav>
  );
};

export default Navbar;
