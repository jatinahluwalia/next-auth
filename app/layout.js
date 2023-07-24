"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider, useSession } from 'next-auth/react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  )
}
