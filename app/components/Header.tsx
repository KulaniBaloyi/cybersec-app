"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
//import { useIsMobile } from "@/hooks/use-mobile" 
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
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const Header = () => {
    //const isMobile = useIsMobile()
  return (
    <header className="flex justify-between border-b border-[Rgba(255,255,255,.1)] sticky bg-black z-40 inset-x-0 top-0 w-full h-10 py-8 px-8 items-center">
        <a href="/" className="text-2xl font-semibold">Heading</a>
        
        {/* Navigation Menu */}
        <NavigationMenu viewport={false} className="mx-auto">
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-[lab(15.204%_0_-.00000596046)]">Home</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black z-40 border-b border-[Rgba(255,255,255,.1)]">
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        // Corrected bg-linear-to-b to bg-gradient-to-b
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                        href="/"
                      >
                        <div className="mb-2 text-lg font-medium sm:mt-4">
                          shadcn/ui
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Beautifully designed components built with Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-[lab(15.204%_0_-.00000596046)]">Components</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black z-40 border-b border-[Rgba(255,255,255,.1)]">
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} hover:bg-[lab(15.204%_0_-.00000596046)]`}>
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* ... other NavigationItems ... */}
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="hover:bg-[lab(15.204%_0_-.00000596046)]">List</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black z-40 border-b border-[Rgba(255,255,255,.1)]">
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="hover:bg-[lab(15.204%_0_-.00000596046)]">Simple</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black z-40 border-b border-[Rgba(255,255,255,.1)]">
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Components</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Documentation</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Blocks</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="hover:bg-[lab(15.204%_0_-.00000596046)]">With Icon</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black z-40 border-b border-[Rgba(255,255,255,.1)]">
                <ul className="grid w-[200px] gap-4 ">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleHelpIcon />
                        Backlog
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleIcon />
                        To Do
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleCheckIcon />
                        Done
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* EXTRA LINKS AND BUTTONS (Moved from ListItem) */}
        <div className="hidden items-center">
            {/* List of 5 extra buttons/links */}
            <ul className="hidden lg:flex gap-6 items-center mr-4">
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Support</Link></li> 
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Blog</Link></li>
            </ul>

            {/* Sign In Buttons */}
            
        </div>
        <div className="flex">
                {/* Note: In a real app, you'd use a proper <button> or <Link> component */}
                <button className="mr-4 text-sm font-medium hover:bg-[lab(15.204%_0_-.00000596046)]">Sign In</button>
                <button className="py-2 px-4 rounded-lg bg-white text-black text-sm font-medium">Sign Up</button> 
            </div>

    </header>
  )
}


// Corrected ListItem component - Removed misplaced header content
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Header