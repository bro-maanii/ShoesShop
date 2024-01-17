"use client";
import Image from 'next/image'
import React from 'react'

export default function ImageView(props:{imag:any}) {
    const image= props.imag
    const bigImage = image[0]
  const handleBigImageDetail=(img:any)=>{
    const bigImage=img;

}
  return (
    <div onClick={()=>handleBigImageDetail(image)} className='w-[40%] hover:border-black hover:border-4'><Image src={image} width={200} height={150} alt='logo' />
    </div>
  )
}
