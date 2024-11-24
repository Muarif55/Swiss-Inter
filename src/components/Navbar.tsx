
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { ModeToggle } from '@/components/ModdleToggle'
import { Button } from 'flowbite-react';
import Image from 'next/image';
// import Logo from './swisslogo.png'




function Nav() {
  return (
  
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Image width={100} height={100}  src="/swisslogo.png" className="mr-3 w-12 h-6 sm:h-9" alt="Flowbite React Logo" />
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Swiss International</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
       <ModeToggle/>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" >
          Home
        </Navbar.Link>
        <Navbar.Link href="/Routes/about">About</Navbar.Link>
        <Navbar.Link href="/Routes/services">Services</Navbar.Link>
        <Navbar.Link href="/Routes/gallery">Gallery</Navbar.Link>
        <Navbar.Link href="/Routes/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Nav
