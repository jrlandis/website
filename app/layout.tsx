import type { Metadata } from "next";
import Image from "next/image";
import { ibm } from '@/components/ui/fonts';
import "./globals.css";
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Parallel.OS",
  description: "compliance automation built for manufacturers",
};

function Header() {
  return (
    <div>
      <Link href="/" className="hover:underline hover:underline-offset-4">
        <h1 className="ibm">Parallel OS</h1>
      </Link>
    </div>
  );
}

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


function Menu() {
  return(
    <NavigationMenu viewport={false} className="w-full">
      <NavigationMenuList className="flex justify-center items-center space-x-6">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button asChild variant="outline_blue">
              <Link href="contact@parallelos.co">Join a Pilot</Link>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center max-w-7xl">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Parallel.OS. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          {/* <Link href="#" className="text-sm text-gray-500 hover:underline hover:underline-offset-4">Privacy Policy</Link>
          <Link href="#" className="text-sm text-gray-500 hover:underline hover:underline-offset-4">Terms of Service</Link> */}
          <Link href="https://x.com/Parallel_OS" target="_blank" rel="noopener noreferrer">
            <img src="/x-logo-black.png" alt="Parallel.OS on X" className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </Link>
          <Link href="https://www.linkedin.com/company/parallel-os" target="_blank" rel="noopener noreferrer">
            <img src="/InBug-Black.png" alt="Parallel.OS on LinkedIn" className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </Link>
        </div>
      </div>
    </footer>
  );
} 


export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png"></link>
        <body className={`${ibm.className} antialiased`}>
          <header className="sticky top-0 z-50 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
              <div className="flex-shrink-0"><Header/></div>
              <div><Menu/></div>
            </div>
          </header>
          {children}
          <Footer />
        </body>
    </html>
  );
}
