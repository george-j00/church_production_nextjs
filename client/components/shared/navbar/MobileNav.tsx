import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "../../ui/separator"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavService } from "./NavServices"
import { NavAbout } from "./NavAbout"

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <GiHamburgerMenu className="text-2xl text-black" />
        </SheetTrigger>

        <SheetContent className="flex w-[80%] flex-col gap-6 text-black bg-white	 md:hidden">
          <p className="font-bold">
            St.Antony&apos;s Jacobite Syrian Orthodox Cathedral{" "}
          </p>
          <Separator className="border border-gray-500" />
          {/* <NavItems /> */}
          <div>
            <ul className="text-black flex flex-col gap-6">
              <li>
                <NavService />
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/parish">Parish</Link>
              </li>
              <li>
                <Link href="/relics">Relics</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="#contactUs">Contacts</Link>
              </li>
              <li>
                <NavAbout />
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
