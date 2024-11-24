
import Feature from '@/components/Feature'
import Header from '@/components/Header'
import Destination from '@/components/destination'
import Hero from '@/components/hero'
import Image from 'next/image'

export default function Home() {
 
  return (
    <main >
     {/* <Header/> */}
     <Hero/>
     <Feature/>
     <Destination/>
    </main>
  )
}
