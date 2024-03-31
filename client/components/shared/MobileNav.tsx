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
        <GiHamburgerMenu className="text-2xl text-white"/>
        </SheetTrigger>

        <SheetContent className="flex w-[80%] flex-col gap-6 text-black bg-teal-100	 md:hidden">
            <p className="font-bold">St.Antony&apos;s Jacobite Syrian Orthodox Cathedral </p>
          <Separator className="border border-gray-500" />
          {/* <NavItems /> */}
          <div>
            <ul className= "text-black flex flex-col gap-6">
              <li>
                <Link href="#aboutUs">About</Link>
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
                <Link href="#contactUs">Contacts</Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
