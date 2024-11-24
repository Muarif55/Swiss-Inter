

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Nav from '@/components/Navbar'
import Footers from '@/components/Footer'
import Header from '@/components/Header'





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons:{
    icon:[
      '/favicon_io/favicon.ico'

    ],
    apple:[
      "/apple-touch-icon.png"
    ],
    shortcut:[
      "/apple-touch-icon.png"


    ],
    
  },
  title: 'Swiss International',
  description: 'Generated by create next app',

}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <>
      {/* <Aos /> */}
      <html lang="en">
      
        <body className={inter.className}>
          <ThemeProvider

            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange



          >



            <div>


              <Nav />
              <Header />



              {children}
              <Footers />
            </div>
          </ThemeProvider>


        </body>
      </html>

    </>

  )
}