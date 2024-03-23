import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { NavService } from "./NavServices";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto px-4 py-2 flex justify-around items-center">
        {/* Logo and Church Name */}
        <div className="flex items-center">
          {/* Church Logo */}
          <Image
            src="/assets/ChurchLogo.png"
            alt="Church logo"
            width={100}
            height={28}
          />
          {/* Church Name */}
          <h1 className="text-xl text-white font-extrabold ml-4">
            St.Antony's Jacobite Syrian Cathedral
          </h1>
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex text-white font-extrabold space-x-8">
          <li className="bg-none mt-1">
            <Link href="#aboutUs">About</Link>
            {/* <a href="#aboutUs">About</a> */}
          </li>
          <li>
            <NavService />
          </li>
          <li className="dropdown mt-1 hover:text-gray-400">
            <Link href="/events">Events</Link>
          </li>
          <li className="dropdown mt-1 hover:text-gray-400">
            <Link href="/about">Relics</Link>
          </li>
          <li className="mt-1">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="mt-1">
            <Link href="/contacts">Contacts</Link>
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
