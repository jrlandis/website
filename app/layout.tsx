import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Parallel.OS",
  description: "Optimize your operations",
};

function Header() {
  return (
    <header>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="hover:underline hover:underline-offset-4">
          <h1>Parallel.OS</h1>
        </Link>
      </div>
    </header>
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
    <NavigationMenu viewport={false} className="max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
      <NavigationMenuList>
        <NavigationMenuItem >
          <NavigationMenuLink asChild className="hover:underline hover:underline-offset-4">
            <Link href="/team">Team</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="hover:underline hover:underline-offset-4">
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Parallel.OS. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          {/* <Link href="#" className="text-sm text-gray-500 hover:underline hover:underline-offset-4">Privacy Policy</Link>
          <Link href="#" className="text-sm text-gray-500 hover:underline hover:underline-offset-4">Terms of Service</Link> */}
        </div>
      </div>
    </footer>
  );
} 


export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${ibm.className} antialiased`}>
        <div className="flex justify-between">
          <div><Header /></div>
          {/* <div><Menu/></div> */}
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
