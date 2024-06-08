"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
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
    title: "About Us",
    href: "#aboutUs", // Update with appropriate href
    description:
      "Learn more about our church and its mission.",
  },
  {
    title: "Church History",
    href: "/church-history", // Update with appropriate href
    description:
      "Discover the rich history and heritage of our church.",
  },
  // {
  //   title: "Parish Members List",
  //   href: "/parish-members", // Update with appropriate href
  //   description:
  //     "View the list of members in our parish community.",
  // },
  {
    title: "Vision and Mission",
    href: "/#VisionMission", // Update with appropriate href
    description:
      "Explore our vision and mission for serving our community.",
  },
];

export function NavAbout() {
  return (
    <NavigationMenu>
      <NavigationMenuList>     
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white">About</NavigationMenuTrigger>
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
