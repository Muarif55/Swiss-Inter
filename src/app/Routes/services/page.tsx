import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";

import Image from 'next/image';

const page = () => {
    return (
        <div className='dark:bg-gray-800'>
            <section className="overflow-hidden py-8 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div  className="lg:pr-8 lg:pt-4">
                            <div  className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Travel Elegently</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray sm:text-4xl">An Expert In Field</p>
                                <p className="mt-6 text-lg leading-8 text-gray-">Although we have grown in all aspects of our operations our motto of pcustomer
                                    satisfaction first ensures that our customers are given the personalized and
                                    unparalleled professional service.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-indigo-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">

                                                <path
                                                    d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z">
                                                </path>
                                                <path
                                                    d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z">
                                                </path>
                                                <path
                                                    d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z">
                                                </path>
                                            </svg>
                                            Social Reach
                                        </dt>
                                        <dd className="inline">We have many followers on social media & International Platforms.
                                            We also have events.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-indigo-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                className="absolute left-1 top-1 h-5 w-5 text-indigo-600">

                                                <path fill-rule="evenodd"
                                                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            Efficient Database
                                        </dt>
                                        <dd className="inline">Our Extensive database allows us to talk to tho of travelers on regular basis through e-shots, sF offers and various other means of digital media have dedicated personnel just
                                            for this function.</dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-indigo-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">

                                                <path fill-rule="evenodd"
                                                    d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                                                    clip-rule="evenodd"></path>
                                                <path
                                                    d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
                                                </path>
                                            </svg>
                                            Clent friendly
                                        </dt>
                                        <dd className="inline">Swiss International with its clients by hosting them at training sessions,
                                            cocktails, lunches and other social activities. We also partner with our
                                            suppliers to jointly host special events and advertising</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="mt-10 flex items-center gap-x-6">
                                <div style={{ height: '55px', width: '200px' }}>
                                    <Link href={'/Routes/contact'}>
                                    
                                    <div  className="button type--B">
                                        <div className="button__line"></div>
                                        <div className="button__line"></div>
                                        <span className="button__text">Contact us</span>
                                        <div className="button__drow1"></div>
                                        <div className="button__drow2"></div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden'>

                            <Image height={1000} width={1000} style={{ transition: '.3s' }} src="/services1.avif" alt="Product screenshot" className="w-[48rem] hover:scale-110 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"  />
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl tracking-tight font-bold text-primary height={1000} width={1000}-800">Highlighted Features</h2>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        {/* can help image height={1000} width={1000} */}
                        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                            <div className="flex items-center justify-center -mx-4 lg:pl-8">
                                <div className="flex flex-col items-end px-3 overflow-hidden rounded">
                                    <Image height={1000} width={1000} style={{ transition: ".2s linear" }}
                                        className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 hover:scale-110"
                                        src="/qasim.jpg"
                                        alt=""
                                    />
                                    <Image height={1000} width={1000} style={{ transition: ".2s linear" }}
                                        className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 hover:scale-110"
                                        src="/iqrar.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="px-3 overflow-hidden rounded">
                                    <Image height={1000} width={1000} style={{ transition: ".2s linear" }}
                                        className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 hover:scale-110"
                                        src="/badami.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/* end can help image height={1000} width={1000} */}

                        <div  className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold text-md mb-6">Domestic and International ticketing</h3>
                                    <p className="text-sm">we take pride in offering exceptional domestic and international ticketing services that cater to your wanderlust. Our agency is dedicated to curating seamless travel experiences, ensuring that every journey you embark upon is filled with convenience and joy.</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold text-md mb-6">Trip planning</h3>
                                    <p className="text-sm"> Trip planning which encompasses visa processing at a nominal fee and advice on
                                        other Immigration requirements.</p>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold text-md mb-6">Meet and Assist services</h3>
                                    <p className="text-sm">Meet and Assist services provided upon request at reasonable charges
                                        Hotel bookings, both local and international.</p>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold text-md mb-6"> Ground transportation</h3>
                                    <p className="text-sm">Ground transportation including airport transfers on request.Umrah package
                                        FITS and group Tour arrangements with celebrties </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='py-10'>
                <div className='w-full text-center'>
                    <h1 style={{ fontWeight: 'bold' }} className='text-4xl underline'>OUR DESTINATIONS</h1>
                </div>
                <Marquee className='mt-24' pauseOnHover={true} style={{}}>



                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/thailandflag.png" alt="" />


                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/2flag.png" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/3flag.jpg" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/4flag.png" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/flag5.webp" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/6flag.webp" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/7flag.png" alt="" />


                </Marquee>
                <Marquee pauseOnHover={true} direction='right' style={{ marginTop: '50px' }}>



                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/srilankaflag.jpg" alt="" />


                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/azerflag.png" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/ethflag.png" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/kenflag.webp" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/kazflag.png" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/singflag.webp" alt="" />
                    <Image height={1000} width={270} style={{ height: '150px', border: '1px solid' }} src="/cambflag.png" alt="" />


                </Marquee>
            </section>

            <section className="py-10">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p
                                className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-500 text-white">
                                A Versatile Travel Agency
                            </p>
                        </div>
                        <h2
                            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">

                                <svg viewBox="0 0 52 24" fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                    <defs>
                                        <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135"
                                            height=".30">
                                            <circle cx="1" cy="1" r=".7"></circle>
                                        </pattern>
                                    </defs>
                                    <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
                                </svg>

                                <span className="relative"></span>
                            </span>
                            Other Services
                        </h2>
                        <p className="text-base text-gray md:text-lg">Swiss International provides an extensive range of client-friendly services which help add worth to our already provided offers
                        </p>
                    </div>


                    <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
                        <div  className="flex flex-col sm:flex-row">
                            <div className="sm:mr-4">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                                    <svg className="w-12 h-12 text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-2 font-semibold leading-5">Medical Tours</h6>
                                <p className="mb-3 text-sm text-gray">

                                    Embark on a journey towards holistic wellness with our specialized Medical Tours offered by Swiss International.
                                </p>
                                <ul className="mb-4 -ml-1 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Flying Doctors
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        medical insurance
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        emergency medical
                                        evacuations

                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <div className="sm:mr-4">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                                    <svg className="w-12 h-12 text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-2 font-semibold leading-5">Secure Travel</h6>
                                <p className="mb-3 text-sm text-gray">
                                    Our social media marketing service helps businesses establish a
                                    strong online presence and engage with their target audience effectively.
                                </p>
                                <ul className="mb-4 -ml-1 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Assistance with lost luggage
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Assistance with frequent flyer programs
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Organizing of Conferences and Team building events
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <div className="sm:mr-4">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                                    <svg className="w-12 h-12 text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-2 font-semibold leading-5">Best Pricing</h6>
                                <p className="mb-3 text-sm text-gray">
                                    We offer at least 3 options where applicable with
                                    best price and availability options.
                                    Negotiations with various Airlines for better rates
                                </p>
                                <ul className="mb-4 -ml-1 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Best price and availability options
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Better rates and upgrades
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Pricing based on route and volume of business.
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section style={{borderBottom:'1px solid',height:"max-content"}} className="flex items-center py-32 bg-stone-100 lg:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="px-4 mb-10 md:text-center md:mb-20">
                <p className="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400">
                    Additional
                </p>
                <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
                    Features
                </h2>
                <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                    <div className="flex-1 h-2 bg-blue-200">
                    </div>
                    <div className="flex-1 h-2 bg-blue-400">
                    </div>
                    <div className="flex-1 h-2 bg-blue-300">
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
                    <h2 className="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                        We are providing further services such as:
                    </h2>
                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                        
                    </p>
                    <ul className="mb-10">
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Wildlife safaris within East Africa and other African destinations
                        </li>
                       
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Travel for Individuals, Groups or Families.
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Adventure packages / Private camping safaris
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            White water rafting
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Hot air ballooning
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Hand Gliding
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Horse trekking
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Helicopter Adventure tours
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            CAR HIRE

                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Incentive for Corporate, Student and Groups

                        </li>
                    </ul>
                    <div style={{ height: '55px', width: '200px' }}>
                                 <Link href="/Routes/about">
                                 
                                <div  className="button type--B">
                                    <div className="button__line"></div>
                                    <div className="button__line"></div>
                                    <span className="button__text">About us</span>
                                    <div className="button__drow1"></div>
                                    <div className="button__drow2"></div>
                                </div>
                                 </Link>
                            </div>
                </div>
                <div  className="relative w-full overflow-hidden rounded-3xl px-4 mb-10 md:w-1/2 lg:mb-0">
                    <Image height={1000} width={1000} style={{transition:".3s linear"}}  src="/serviceslast.avif" alt=""
                        className="relative z-40  hover:scale-110 object-cover w-full rounded-3xl md:h-96 h-44"/>
                    <div className="absolute top-0 right-0 items-center justify-center hidden -mt-16 lg:inline-flex">
                        <svg width="290" height="166" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="a"  maskUnits="userSpaceOnUse" x="0" y="0" width="290"
                                height="166">
                                <path fill="url(#paint0_linear_228_431)" d="M0 0H290V165.838H0z" />
                            </mask>
                            <g mask="url(#a)" fill-rule="evenodd" clip-rule="evenodd">
                                <path
                                    d="M-.146 77.865c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm21.236-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm16.185 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm21.236-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm72.314 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469zm-18.709 0c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm58.655-16.824c-1.395 0-2.525 1.105-2.525 2.468 0 1.364 1.13 2.469 2.525 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm-16.184-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zM21.09 61.041c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM-.146 63.509c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zM133.35 46.684c-1.395 0-2.525 1.106-2.525 2.469 0 1.363 1.13 2.469 2.525 2.469 1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.469c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468s-1.13 2.469-2.525 2.469c-1.394 0-2.524-1.106-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468s1.13 2.469 2.524 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468s-1.13 2.469-2.524 2.469c-1.394 0-2.525-1.106-2.525-2.469zm-16.184-2.468c-1.394 0-2.524 1.105-2.524 2.468s1.13 2.469 2.524 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468s-1.13 2.469-2.524 2.469c-1.394 0-2.524-1.106-2.524-2.469zM21.09 46.685c-1.394 0-2.524 1.105-2.524 2.468s1.13 2.469 2.524 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM-.146 49.153c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468s-1.13 2.469-2.524 2.469c-1.394 0-2.524-1.106-2.524-2.469zM133.35 32.328c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468s-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.363 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468s-1.13-2.469-2.525-2.469zm-21.234 2.469c0-1.363 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468s-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.363 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM21.09 32.328c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468s-1.13-2.469-2.524-2.469zM-.146 34.797c0-1.363 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM133.35 17.972c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468 0-1.364-1.13-2.469-2.525-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM21.09 17.972c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zM-.146 20.441c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM133.35 3.619c-1.395 0-2.525 1.105-2.525 2.468 0 1.364 1.13 2.469 2.525 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zM95.929 3.62c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469 0-1.363-1.13-2.468-2.525-2.468zM74.695 6.087c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zM58.511 3.62c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM37.275 6.087c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zM21.09 3.62c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM-.146 6.087c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469z"
                                    fill="url(#paint1_linear_228_431)" />
                                <path
                                    d="M-.146 163.37c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm21.236-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm16.185 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm21.236-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm72.314 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469zm-18.709 0c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm58.655-16.824c-1.395 0-2.525 1.105-2.525 2.468s1.13 2.469 2.525 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468s-1.13 2.469-2.525 2.469c-1.394 0-2.524-1.106-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468s1.13 2.469 2.524 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm-16.184-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.185-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm133.496-16.825c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.185-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm133.496-16.825c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468 0-1.364-1.13-2.469-2.525-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.185-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm133.496-16.825c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468 0-1.364-1.13-2.469-2.525-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.185-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM133.35 89.124c-1.395 0-2.525 1.105-2.525 2.468 0 1.364 1.13 2.469 2.525 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469 0-1.363-1.13-2.468-2.525-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm-16.184-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zM21.09 89.124c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM-.146 91.592c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469z"
                                    fill="url(#paint2_linear_228_431)" />
                                <path
                                    d="M284.472 77.866c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.469 2.524 2.469 1.394 0 2.525-1.106 2.525-2.47zm-21.237-2.469c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.469-2.524 2.469-1.394 0-2.524-1.106-2.524-2.47 0-1.362 1.13-2.468 2.524-2.468zm-16.184 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.469 2.524 2.469 1.394 0 2.525-1.106 2.525-2.47zm-21.237-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.469-2.525 2.469s-2.524-1.106-2.524-2.47c0-1.362 1.13-2.468 2.524-2.468zM153.5 77.866c0-1.363-1.13-2.469-2.524-2.469-1.395 0-2.525 1.106-2.525 2.469 0 1.363 1.13 2.469 2.525 2.469 1.394 0 2.524-1.106 2.524-2.47zm18.709 0c0-1.363-1.13-2.469-2.524-2.469-1.394 0-2.525 1.106-2.525 2.469 0 1.363 1.131 2.469 2.525 2.469s2.524-1.106 2.524-2.47zm16.187-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.469-2.525 2.469s-2.524-1.106-2.524-2.47c0-1.362 1.13-2.468 2.524-2.468zm21.234 2.469c0-1.363-1.13-2.469-2.525-2.469-1.394 0-2.524 1.106-2.524 2.469 0 1.363 1.13 2.469 2.524 2.469 1.395 0 2.525-1.106 2.525-2.47zM150.976 61.04c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468s1.13-2.469 2.525-2.469zm21.233 2.469c0-1.363-1.13-2.469-2.524-2.469-1.394 0-2.525 1.106-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468 1.13-2.469 2.524-2.469zm21.234 2.469c0-1.363-1.13-2.469-2.525-2.469-1.394 0-2.524 1.106-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468s1.13-2.469 2.524-2.469zm21.237 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zM150.976 46.685c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.47-2.524 2.47-1.395 0-2.525-1.106-2.525-2.47 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.47 2.525 2.47s2.524-1.106 2.524-2.47zm16.187-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.47-2.525 2.47s-2.524-1.106-2.524-2.47c0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.47 2.524 2.47 1.395 0 2.525-1.106 2.525-2.47zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.47-2.525 2.47s-2.524-1.106-2.524-2.47c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.47 2.524 2.47 1.394 0 2.525-1.106 2.525-2.47zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.47-2.524 2.47-1.394 0-2.524-1.106-2.524-2.47 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.47 2.524 2.47 1.394 0 2.525-1.106 2.525-2.47zM150.976 32.33c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.469 2.525 2.469s2.524-1.105 2.524-2.469zm16.187-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zM150.976 17.973c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.469 2.525 2.469s2.524-1.105 2.524-2.469zm16.187-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zM150.976 3.62c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468s1.13-2.469 2.525-2.469zm21.233 2.469c0-1.363-1.13-2.469-2.524-2.469-1.394 0-2.525 1.106-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468s1.13-2.469 2.524-2.469zm21.234 2.469c0-1.363-1.13-2.469-2.525-2.469-1.394 0-2.524 1.106-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468s1.13-2.469 2.524-2.469zm21.237 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468z"
                                    fill="url(#paint3_linear_228_431)" />
                                <path
                                    d="M284.472 163.37c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm-21.237-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm-16.184 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm-21.237-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zM153.5 163.37c0-1.363-1.13-2.468-2.524-2.468-1.395 0-2.525 1.105-2.525 2.468 0 1.364 1.13 2.469 2.525 2.469 1.394 0 2.524-1.105 2.524-2.469zm18.709 0c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.469 2.525 2.469s2.524-1.105 2.524-2.469zm16.187-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm-58.654-16.824c1.394 0 2.524 1.105 2.524 2.468s-1.13 2.469-2.524 2.469c-1.395 0-2.525-1.106-2.525-2.469 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468s1.131 2.469 2.525 2.469 2.524-1.106 2.524-2.469zm16.187-2.468c1.394 0 2.525 1.105 2.525 2.468s-1.131 2.469-2.525 2.469-2.524-1.106-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm-133.496-16.825c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468 0-1.364 1.13-2.469 2.525-2.469zm21.233 2.469c0-1.364-1.13-2.469-2.524-2.469-1.394 0-2.525 1.105-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.525 1.105 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468c0-1.364 1.13-2.469 2.524-2.469zm21.234 2.469c0-1.364-1.13-2.469-2.525-2.469-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.105 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468c0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm-133.496-16.825c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468 0-1.364 1.13-2.469 2.525-2.469zm21.233 2.469c0-1.364-1.13-2.469-2.524-2.469-1.394 0-2.525 1.105-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.234 2.469c0-1.364-1.13-2.469-2.525-2.469-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.105 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468c0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm-133.496-16.825c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468 0-1.364 1.13-2.469 2.525-2.469zm21.233 2.469c0-1.364-1.13-2.469-2.524-2.469-1.394 0-2.525 1.105-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.234 2.469c0-1.364-1.13-2.469-2.525-2.469-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.105 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468c0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zM150.976 89.124c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.469 2.525 2.469s2.524-1.105 2.524-2.469zm16.187-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469z"
                                    fill="url(#paint4_linear_228_431)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_228_431" x1="152.25" y1="161.063" x2="154.33"
                                    y2="4.773" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#fff" />
                                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_228_431" x1="133.019" y1="80.334" x2="3.944"
                                    y2="3.188" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#246151" />
                                    <stop offset=".422" stop-color="#A7C6BC" />
                                    <stop offset=".865" stop-color="#73CADC" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_228_431" x1="133.019" y1="165.839" x2="3.944"
                                    y2="88.693" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#246151" />
                                    <stop offset=".422" stop-color="#A7C6BC" />
                                    <stop offset=".865" stop-color="#73CADC" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_228_431" x1="151.307" y1="80.335" x2="280.382"
                                    y2="3.188" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#246151" />
                                    <stop offset=".422" stop-color="#A7C6BC" />
                                    <stop offset=".865" stop-color="#73CADC" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_228_431" x1="151.307" y1="165.839" x2="280.382"
                                    y2="88.693" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#246151" />
                                    <stop offset=".422" stop-color="#A7C6BC" />
                                    <stop offset=".865" stop-color="#73CADC" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>




        </div>
    )
}

export default page