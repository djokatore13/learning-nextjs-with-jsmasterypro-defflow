import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



export default function TestAccordionComponent() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent className='bg-white text-black'>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  )
}