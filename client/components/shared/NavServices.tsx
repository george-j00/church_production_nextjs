"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Evening Prayer",
    href: "#", // Matches title in lowercase with hyphen
    description:
      "Join us for a time of reflection and prayer in the evening.",
  },
  {
    title: "HOLY MASS",
    href: "#", // Matches title in lowercase with hyphen
    description:
      "Attend the celebration of the Eucharist, the central act of Christian worship.",
  },
  {
    title: "Prayer Request",
    href: "/services/prayer-request", // Matches title in lowercase with hyphen
    description:
      "Submit a prayer request for yourself or someone you care about.",
  },
  {
    title: "Live Service",
    href: "#", // Descriptive name for live service
    description:
      "Watch our live stream service and participate from the comfort of your home.",
  },
];


export function NavService() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
     
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white">Services </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-white">
            <ul className="grid w-[300px] gap-1 p-4 md:w-[500px] md:grid-cols-2 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
