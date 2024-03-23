import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
//   import NavItems from "./NavItems"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavService } from "./NavServices";

const MobileNav = () => { 
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
        <GiHamburgerMenu className="text-2xl text-black"/>
        </SheetTrigger>

        <SheetContent className="flex w-[90%] flex-col gap-6 text-white bg-black md:hidden">
            <p>Church Name </p>
          <Separator className="border border-gray-500" />
          {/* <NavItems /> */}
          <div>
            <ul className= "text-white flex flex-col gap-6">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/relics">Relics</Link>
              </li>
              <li className="dropdown hover:text-gray-400">
                <NavService />
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
