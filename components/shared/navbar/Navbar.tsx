"use client";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { NavService } from "./NavServices";
import { NavAbout } from "./NavAbout";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full bg-white shadow-md z-10">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Church Name */}
        <div className="flex items-center flex-1 md:flex-initial">
          {/* Church Logo */}
          <Image
            src="/assets/ChurchLogo.png"
            alt="Church logo"
            width={60}
            height={28}
            className="flex-shrink-0"
          />
          <div className="text-center sm:ml-6 pr-5">
            <h1 className="text-sm md:text-2xl font-extrabold text-black leading-tight">
              St.Antony&apos;s Jacobite Syrian Orthodox Cathedral
            </h1>
            <p className="text-[9px] md:text-sm text-gray-700 max-w-[500px] mx-auto">
              Under the Holy Apostolic See of Antioch and All the East & St
              Anthony&apos;s Educational Society Honnavar (Public Trust F-17
              Karwar Registered under Charitable Societies Act)
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center text-black font-bold space-x-4 lg:space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <NavAbout />
          </li>
          <li>
            <NavService />
          </li>
          <li>
            <Link href="/parish" className="hover:text-gray-500 transition-colors">
              Parish
            </Link>
          </li>
          <li>
            <Link href="/relics" className="hover:text-gray-500 transition-colors">
              Relics
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-gray-500 transition-colors">
              Events
            </Link>
          </li>
          <li>
            <button
              onClick={() => router.push("/#contactUs")}
              className="hover:text-gray-500 transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
