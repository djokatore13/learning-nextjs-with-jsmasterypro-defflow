import React from 'react'

// Components
import Navbar from "@/components/navigation/navbar";

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}