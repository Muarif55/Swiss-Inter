import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className='dark:bg-gray-800'>
            <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div  className="lg:max-w-md">
                                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                                    <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                        About Us
                                    </h1>
                                </div>
                                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                    Since 2013, Swiss International has been providing an unrivalled full spectrum of
                                    business and leisure travel services that our satisfied customers will certainly attest
                                    to. We pride ourselves in offering world class service in the regions we operate. Our
                                    well experienced consultants offer clients with most economical, practical and
                                    convenient travel solutions.
                                </p>
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-blue-500 dark:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path
                                                        d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">Diverse
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Projects and Plans</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-blue-500 dark:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    <path fill-rule="evenodd"
                                                        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                </svg>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">Satisfied
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Clients</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-blue-500 dark:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">Robust
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Staff</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-blue-500 dark:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                                </svg>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">24h
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Assistance</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 rounded-3xl overflow-hidden">
                            <Image width={1000} height={1000} style={{transition:".3s linear"}} src="/about1.avif" alt=""
                                className="relative z-40 object-cover w-full h-full rounded-3xl hover:scale-110" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center bg-stone-50 xl:h-screen font-poppins dark:bg-gray-800 ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap items-center ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div  className="lg:max-w-md">
                                <span className="text-xl font-semibold text-blue-600 uppercase dark:text-blue-500">
                                    About Us
                                </span>
                                <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                                &quot;Discover Your Next Adventure with Us!&quot;
                                </h2>
                                <p className="mb-10 text-gray-600 dark:text-gray-400 ">
                                At Swiss International, we specialize in curating personalized travel experiences that transcend expectations. Our dedicated team of travel experts is committed to crafting tailor-made itineraries, securing the best deals, and ensuring every detail of your journey is meticulously planned.
                                </p>
                            </div>
                        </div>
                        <div  className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="flex mb-4">
                                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-file-earmark-code" viewBox="0 0 16 16">
                                        <path
                                            d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                        <path
                                            d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                                    </svg>
                                </span>
                                <div>
                                    <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                    Expertise and Knowledge:
                                    </h2>
                                    <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                                   Swiss International employs experienced professionals with extensive knowledge about various destinations, cultures, and travel trends. Their expertise helps in crafting unique and personalized travel experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-file-text" viewBox="0 0 16 16">
                                        <path
                                            d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                        <path
                                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                    </svg>
                                </span>
                                <div>
                                    <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                    Industry Connections and Partnerships
                                    </h2>
                                    <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                                    Strong relationships with airlines, hotels, tour operators, and other travel-related entities enable them to offer competitive prices, exclusive deals, and added perks to their clients.
                                    </p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-bank2" viewBox="0 0 16 16">
                                        <path
                                            d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z">
                                        </path>
                                    </svg>
                                </span>
                                <div>
                                    <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                    Flexibility and Adaptability
                                    </h2>
                                    <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                                    Swiss International remains flexible and adaptable to changes, be it unexpected circumstances during travel or accommodating last-minute requests from clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{borderBottom:'1px solid'}} className="flex items-center  bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800  ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="px-4 mb-10 md:text-center md:mb-20">
                        <p className="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400">
                            About Us
                        </p>
                        <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
                            What we Offer
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
                    <div className="flex flex-wrap ">
                        <div  className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 rounded-3xl overflow-hidden">
                            <Image width={1000} height={1000} style={{transition:'.3s linear'}} src="/about2.avif" alt=""
                                className="relative z-40 object-cover w-full h-96 hover:scale-110 rounded-3xl" />
                        </div>
                        <div  className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2
                                className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300">
                                We are providing a better facility
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            Driven by a love for exploration and a desire to share the world&apos;s wonders, [Travel Agency Name] was founded by a team of avid travelers. Our journey began with a simple yet powerful idea: to redefine travel by personalizing each adventure to match our clients&apos; dreams.
                            </p>
                            <ul className="mb-10">
                                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                                    <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                        </svg>
                                    </span>
                                    Global Expertise.
                                </li>
                                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                                    <span className="mr-3 text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                        </svg>
                                    </span>
                                    Unmatched Service.
                                </li>
                                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                                    <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                        </svg>
                                    </span>
                                    Trusted Partnerships.
                                </li>
                            </ul>
                            <Link href={'/Routes/services'}>
                            
                            <div style={{ height: '55px', width: '200px' }}>

                                <div  className="button type--B">
                                    <div className="button__line"></div>
                                    <div className="button__line"></div>
                                    <span className="button__text">Our Services</span>
                                    <div className="button__drow1"></div>
                                    <div className="button__drow2"></div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Page