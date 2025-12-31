"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// 💡 Data Refactored: Projects always on, renamed to match archive protocol
const projectDomains = [
  {
    title: "VOID_STACK",
    href: "/projects/finance",
    color: "text-violet-400",
    description: "Automating capital flow and high-leverage node acquisition.",
  },
  {
    title: "BIO_HARDWARE",
    href: "/projects/health",
    color: "text-cyan-400",
    description: "Physical maintenance protocols and social node refactoring.",
  },
  {
    title: "OS_OVERRIDE",
    href: "/projects/mind",
    color: "text-rose-400",
    description: "De-platforming strategies and cognitive focus restoration.",
  },
  {
    title: "GEO_SHIFT",
    href: "/projects/travel",
    color: "text-orange-400",
    description: "Geographic coordinate movement for reality refactoring.",
  },
]

const Header = () => {
  return (
    <header className="flex justify-between border-b border-white/5 sticky bg-background/80 z-50 inset-x-0 top-0 w-full h-16 px-8 items-center backdrop-blur-xl">
      
      {/* Brand: Void Archive Branding */}
      <a href="/" className="group flex items-center text-xl font-black tracking-tighter uppercase italic text-white">
        VOID_SYSTEM <span className="text-violet-500 font-mono not-italic text-[9px] ml-2 tracking-widest group-hover:text-violet-300 transition-colors">[v.6.0]</span>
      </a>
      
      {/* Navigation Menu: Spectrum Terminal Style */}
      <NavigationMenu viewport={true} className="mx-auto hidden md:flex">
        <NavigationMenuList className="gap-0 border border-white/5 bg-slate-950/50 p-1">
          
          {/* Projects Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[10px] tracking-[0.3em] uppercase font-black hover:text-violet-400">
              Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-slate-950 border border-white/10 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <ul className="grid gap-4 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full flex-col justify-end rounded-none bg-gradient-to-b from-violet-500/10 to-transparent p-6 no-underline outline-none transition-all hover:from-violet-500/20 border border-violet-500/20"
                      href="/projects"
                    >
                      <div className="mb-2 text-xl font-black text-violet-400 uppercase tracking-tighter italic">
                        Projects_Archive
                      </div>
                      <p className="text-slate-500 text-[10px] leading-tight font-light italic uppercase tracking-widest">
                        Access all life-refactoring logs and system audits.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {projectDomains.map((domain) => (
                  <ListItem key={domain.title} title={domain.title} href={domain.href} accentColor={domain.color}>
                    {domain.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/about" className="text-[10px] tracking-[0.3em] uppercase font-black">Identity_Log</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Status Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[10px] tracking-[0.3em] uppercase font-black">Node_Status</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-slate-950 border border-white/10 rounded-none">
              <ul className="grid w-[220px] gap-1 p-4">
                <ListItemWithIcon icon={<CircleHelpIcon className="size-3"/>} title="Backlog_Nodes" href="/backlog" />
                <ListItemWithIcon icon={<CircleIcon className="size-3 text-orange-500/50"/>} title="In_Refactor" href="/active" />
                <ListItemWithIcon icon={<CircleCheckIcon className="size-3 text-violet-500"/>} title="Optimized_State" href="/done" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      {/* Auth Actions: High-contrast Violet */}
      <div className="flex items-center gap-6">
          <button className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-white transition-colors">
            Access_Gate
          </button>
          <button className="relative py-2.5 px-6 rounded-none bg-violet-600 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-violet-400 transition-all active:scale-95">
            Initialize
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-violet-400" />
          </button> 
      </div>
    </header>
  )
}

// 💡 Forensic Styling for Menu Items
interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  title: string;
  href: string;
  accentColor?: string;
}

function ListItem({ title, children, href, className, accentColor, ...props }: ListItemProps) {
  return (
    <li className={cn("group", className)} {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 border border-transparent hover:border-white/5">
          <div className={cn("text-[10px] font-black tracking-widest uppercase italic transition-colors", accentColor || "text-white")}>
            {title}
          </div>
          <p className="text-slate-500 line-clamp-2 text-[9px] leading-snug font-light italic">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function ListItemWithIcon({ title, href, icon }: ListItemProps & { icon: React.ReactNode }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="flex items-center gap-4 p-3 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-violet-400 hover:bg-violet-500/5 transition-all">
          <span className="opacity-50">{icon}</span>
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Header