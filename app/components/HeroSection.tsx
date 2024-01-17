
import React from 'react'
import { Button } from "@/components/ui/button"
import { ShoppingBagIcon } from 'lucide-react'
import Image from "next/image";
import {ForUrl} from '@/app/lib/sanity'
import { GetHeroImg } from '@/ecomerce-project/sanity-utils';



export default async function HeroSection() {
    const data = await GetHeroImg()
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center bg-imagehero pb-16' >
        {/* text */}
        <div className='flex flex-col justify-center items-center p-3 py-8'>
            <p className='text-3xl text-red-500 '>New Running Shoes</p>
            <p className='text-5xl font-extrabold text-white'>Men's Like Plex</p>
            <p className='text-white text-xl sm:w-[50%] '>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex flex-wrap gap-3 pb-10'>
                <Button className='bg-red-500'>
                    <ShoppingBagIcon className="mr-2 h-4 w-4" /> Buy Now
                </Button>
                <Button className='bg-slate-200'>
                    <ShoppingBagIcon className="mr-2 h-4 w-4" /> Buy Now
                </Button>
            </div>

        </div>
        {/* images */}
        <div className=''>
            <Image src={ForUrl(data.heroimage1).url()} alt="logo" width={500} height={600} className=" "/>
        </div>
        
        {/* <div className='flex '>
            <div className=''>
            <Image src={ForUrl(data).url()} alt="logo" width={500} height={600} className=" "/>
           </div>
           <div className='min-[520px]:w-[100%] w-[50%]'>
                <Image src={ForUrl(data.image2).url()} alt="logo" width={500} height={600} className=''/>
            </div>
        </div> */}
    </div>
  )
}
// "absolute  smallestt:translate-x-16 sm:translate-x-20"
// -translate-x-24 smallestt:-translate-x-20 sm:-translate-x-24 gap-x-3