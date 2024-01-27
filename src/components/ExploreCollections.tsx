import React from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { montserrat } from '@/app/fonts'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Card from './Card'
import { client } from '@/app/lib/sanity'
import { cardProductInterface } from '@/app/interface'

const getData = async () =>{
  const query = `*[_type == "product"][0...6]   {
    _id,
    price,
    name,
    slug,
  "categoryName": category->name,
  "imageUrl": image.asset->url
  }`
const data = await client.fetch(query,{ next: { revalidate: 432000 } }); // 5 Days revalidation time 
return data
}

export default async function ExploreCollections() {
  const data:cardProductInterface[] = await getData();
  return (
    <div className='pb-20 bg-[#d7d7d7]'>
        <MaxWidthWrapper>
          <p className={cn("text-2xl pt-16 pb-9 flex mx-auto tracking-tight", montserrat.className)}>Explore the new collection <ArrowRight className="ml-2 mt-1"/></p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {data.map((product)=>{
              return <Card key={product._id} {...product} />
            })}
          </div>

        </MaxWidthWrapper>
    </div>
  )
}