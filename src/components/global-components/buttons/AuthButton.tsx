import React from 'react'
import Image from 'next/image'

// Components - shadcn/ui
import { Button } from '../../ui/button'

type Props = {
  btnSrc: string,
  altBtnText: string,
  labelText: string,
  classes: string,
  onClick: () => Promise<void>
}

export default function AuthButton({ btnSrc, altBtnText, labelText, classes, onClick}: Props) {

  const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"

  return (
    <Button className={buttonClass} onClick={onClick}>
      <Image 
        src={btnSrc}
        width={20}
        height={20}
        alt={altBtnText}
        className={classes}
      />
      <span>{labelText}</span>
    </Button>
  )
}