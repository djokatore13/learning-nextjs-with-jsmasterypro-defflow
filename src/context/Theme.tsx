'use client'
import { ThemeProviderProps } from 'next-themes'
import { ThemeProvider as NextThemesProider } from 'next-themes'
import React from 'react'


export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProider {...props}>
      {children}
    </NextThemesProider>
  )
}