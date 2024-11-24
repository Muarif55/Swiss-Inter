'use client'
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Hero = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200, // Customize options as needed
    });
}, []);
  return (
    <div className=' p-10 dark:bg-gray-800'>
    


      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
          <div   className="max-w-xl mb-6">
            
            <h2  className="max-w-lg mb-6 underline font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
             SWISS INTERNATIONAL
              
            </h2>
            <p  className="text-base  md:text-lg">
              For 10 years Swiss International has been providing an unrivalled full spectrum of
              business and leisure travel services that our satisfied customers will certainly attest
              to. We pride ourselves in offering world class service in the regions we operate. Our
              well experienced consultants offer clients with most economical, practical and
              convenient travel solutions.
            </p>
          </div>
          <div className="flex items-center ">


            {/* <a href="#" className="button type--A">
  <div className="button__line"></div>
  <div className="button__line"></div>
  <span className="button__text">ENTRY</span>
  <div className="button__drow1"></div>
  <div className="button__drow2"></div>
</a> */}
            <Link href='/Routes/gallery'>
            
            <div   className="button type--B">
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text">See Our Tours</span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </div>
            </Link>
            {/* <a href="#" class="button type--C">
  <div class="button__line"></div>
  <div class="button__line"></div>
  <span class="button__text">ENTRY</span>
  <div class="button__drow1"></div>
  <div class="button__drow2"></div>
</a> */}



          </div>
        </div>
        <div className=''>
          <Image width={1000} height={1000} style={{ transition: ".3s" }}
            src="/hero.avif"
            className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm rounded-3xl hover:scale-110"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Hero