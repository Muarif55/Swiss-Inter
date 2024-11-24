
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter,BsYoutube,BsTiktok,BsWhatsapp } from 'react-icons/bs';

function Footers() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="/swisslogo.png"
              alt="Flowbite Logo"
              name="Swiss International"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="QUICK LINKS" />
              <Footer.LinkGroup col>
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/Routes/about">About</Footer.Link>
                <Footer.Link href="/Routes/services">Services</Footer.Link>
                <Footer.Link href="/Routes/gallery">Gallery</Footer.Link>


                <Footer.Link href="/Routes/contact">Contact</Footer.Link>

              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.facebook.com/swissinternationaltours">Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/swissinternationaltours457/">Instagram</Footer.Link>
                
                <Footer.Link href="https://www.tiktok.com/@swiss.internation1?_t=8iWi3u3whgA&_r=1">Tik Tok</Footer.Link>
                <Footer.Link href="tel:+92 321 4743165">Whatsapp</Footer.Link>

              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Swiss International™" year={2023} />
          <div  className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon  href="https://www.facebook.com/swissinternationaltours" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/swissinternationaltours457/" icon={BsInstagram} />
           
            <Footer.Icon href="https://www.tiktok.com/@swiss.internation1?_t=8iWi3u3whgA&_r=1" icon={BsTiktok} />
            <Footer.Icon href="tel:+92 321 4743165" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default Footers
