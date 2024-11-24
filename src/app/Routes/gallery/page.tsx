'use client'
import React from 'react'
import { useEffect } from 'react'
import { Divider, Image } from 'antd'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';






const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Customize options as needed
        });
    }, []);


    return (
        <>
            <div className='p-10 dark:bg-gray-800'>

                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="grid sm:grid-cols-2 sm:items-center gap-8">
                        <div className="sm:order-2">
                            <div className="relative rounded-3xl overflow-hidden">
                                {/* <Ima style={{ transition: '.3s linear' }} className="w-full h-full absolute top-0 start-0 object-cover rounded-3xl hover:scale-110" src="/gallery1.avif" alt="Image Description" /> */}
                            <Image className="h-auto max-w-full rounded-3xl" src="/gallery1.avif" alt="" />

                                
                            </div>
                        </div>


                        <div className="sm:order-1">
                            <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                Our Work insight
                            </p>

                            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
                                <a className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Take A Look At Our Satisfied Customers
                                </a>
                            </h2>





                            <div className="mt-5">
                                <div style={{ height: '55px', width: '200px' }}>
                                     <Link href={'/Routes/services'}>
                                     
                                    <div className="button type--B">
                                        <div className="button__line"></div>
                                        <div className="button__line"></div>
                                        <span className="button__text"> Our Services</span>
                                        <div className="button__drow1"></div>
                                        <div className="button__drow2"></div>
                                    </div>
                                     </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div data-aos='fade-up' className='mx-auto w-full text-center mt-10'>
                    <h1 style={{ fontWeight: 'bold' }} className='text-5xl underline '>GALLERIA</h1>

                </div>



                <div  className="grid grid-cols-2 mt-32 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div data-aos='zoom-in' className=''>
                            <Image className="h-auto max-w-full rounded-3xl " src="/swiss independent .jpg" alt="" />
                        </div>
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss2.jpg" alt="" />
                        </div>
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss4.jpg" alt="" />
                        </div>
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss5.jpg" alt="" />
                        </div>
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss7.jpg" alt="" />
                        </div>
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss8.jpg" alt="" />
                        </div>
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss9.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss10.jpg" alt="" />
                        </div>
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss11.jpg" alt="" />
                        </div>
                        <div data-aos='zoom-in'  >
                            <Image className="h-auto max-w-full rounded-3xl" src="/swiss12.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div style={{width:'100%',borderBottom:'1px solid'}}>

            </div>
         


        </>

    )
}

export default Gallery