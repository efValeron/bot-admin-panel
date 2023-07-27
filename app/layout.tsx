import './globals.css'
import type {Metadata} from 'next'
import {Manrope} from 'next/font/google'
import React from "react"
import TheNavBar from "@/components/TheNavBar";

const manrope = Manrope({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin panel',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smoot">
    <body className={manrope.className}>
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="z-10 lg:w-16 h-16 sticky top-0">
        <TheNavBar/>
      </div>
      {children}
    </div>
    </body>
    </html>
  )
}