"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { sidebarLinks } from '../../../../constants'
import { SheetClose } from '@/components/ui/sheet'


type Props = {
  isMobileNav?: boolean;
}

export default function NavLinks({ isMobileNav = false }: Props) {

  const pathname = usePathname()

  const userId = 1; // test only

  return (
    <>
      {
        sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

          // Check if the link is profile and add the user id
          if(link.route === "/profile") {
            if(userId) {
              link.route = `${link.route}/${userId}`
            } else {
              return null;
            }
          }

          const LinkComponent = (
            <Link href={link.route} key={link.label} className={cn(isActive ? "primary-gradient rounded-lg text-ligh-900" : "text-dark300_light900",  "flex items-center justify-start gap-4 bg-transparent p-4")}>
              <Image 
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className={cn({ "invert-colors": !isActive })}
              />
              <p className={cn(isActive ? "base-bold" : "base-medium", !isMobileNav && "max-lg:hidden")}>{link.label}</p>
            </Link>
          )

          return isMobileNav ? (
            <SheetClose asChild key={link.route}>
              {LinkComponent}
            </SheetClose>
          ) : <React.Fragment key={link.route}>{LinkComponent}</React.Fragment>
        })
      }
    </>
  )
}