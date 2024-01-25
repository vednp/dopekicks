import React from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { montserrat } from '@/app/fonts'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Card from './Card'

type Props = {}

export default function ExploreCollections({}: Props) {
  return (
    <div>
        <div className="bg-[#d7d7d7]">
        <MaxWidthWrapper>
          <p className={cn("text-2xl pt-16 pb-9 flex mx-auto tracking-tight", montserrat.className)}>Explore the new collection <ArrowRight className="ml-2 mt-1"/></p>
          <Card/>
        </MaxWidthWrapper>
       </div>
    </div>
  )
}