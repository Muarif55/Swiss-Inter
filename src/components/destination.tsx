import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Destination = () => {
  return (
    <div style={{borderBottom:'1px solid'}} className='dark:bg-gray-800'> <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
          <svg className="text-teal-400 w-7 h-7" viewBox="0 0 24 24">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points=" 8,5 8,1 16,1 16,5"
              strokeLinejoin="round"
            />
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="9,15 1,15 1,5 23,5 23,15 15,15"
              strokeLinejoin="round"
            />
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="22,18 22,23 2,23 2,18"
              strokeLinejoin="round"
            />
            <rect
              x="9"
              y="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              width="6"
              height="4"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="max-w-xl mb-6">
          <h2  className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
            Let us handle
            <br className="hidden md:block" />
            your next{' '}
            <span className="inline-block text-deep-purple-accent-400">
              destination
            </span>
          </h2>
          <p className="text-base text-gray md:text-lg">
          At our travel agency, we take pride in curating exceptional experiences that go beyond the ordinary. Our commitment is to create tailor-made journeys that reflect your unique desires, preferences, and aspirations. With a wealth of expertise and a passion for exploration, we&apos;re your trusted partner in navigating the world of travel.
          </p>
        </div>
        <div className=''>
          {/* <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a> */}
          <div style={{height:'55px',width:'200px'}}>
<Link href={'/Routes/about'}>

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
      </div>
      <div className="flex items-center justify-center -mx-4 lg:pl-8">
        <div className="flex flex-col items-end px-3 overflow-hidden rounded">
          <Image width={1000} height={1000} style={{transition:".2s linear"}}
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 hover:scale-110"
            src="/destination1.avif"
            alt=""
          />
          <Image width={1000} height={1000} style={{transition:".2s linear"}}
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 hover:scale-110"
            src="/destination2.avif"
            alt=""
          />
        </div>
        <div   className="px-3 overflow-hidden rounded">
          <Image width={1000} height={1000} style={{transition:".2s linear"}}
            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 hover:scale-110"
            src="/destination3.avif"
            alt=""
          />
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Destination