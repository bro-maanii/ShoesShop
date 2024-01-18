import React from "react";
import { client } from "@/app/lib/sanity";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "keen-slider/keen-slider.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { IdataTypes } from "./sub-components/Interface_type";
import { GetSaleProductHomeView } from "@/ecomerce-project/sanity-utils";
import AddToCart from "./sub-components/AddToCart";
import Image from "next/image";

export default async function Section2() {
    const data: IdataTypes[] = await GetSaleProductHomeView();
    return (
      <div className="bg-white">
        {/* text button */}
        <div className="flex flex-col justify-center align-middle bg-black p-4 pt-7">
                <div className="flex justify-center align-middle pt-5 pb-10">
                    <p className=" text-4xl font-extrabold text-white" >THE SEASON BEGINGS PROMOTION SALE</p>
                </div>
            <Link href={"/"} className="flex justify-center align-middle">
                <button className="ml-4 hover:bg-gradient-to-r from-purple-400 to-blue-600 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Buy Now
                </button>
            </Link>
            <div className="flex justify-center align-middle pt-5">
                    <p className=" text-4xl font-extrabold text-white" >Hurry</p>
            </div>
            <div className="flex justify-center align-middle">
                <p className=" text-xl font-normal text-white" > Before the Offer Ends</p>
            </div>
    
            {/* 
            <p className="hover:text-red-600 font-medium ">See More<span className="hover:text-red-600 "><ArrowRight/></span></p>
             */}
            
        </div>
             {/* product heading */}
        <h2 className="flex justify-center py-6 text-xl font-bold opacity-75 text-red-800 ">Products</h2>
        {/* images */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product._id}  className="group md:skew-y-12 md:hover:skew-y-0 duration-500 delay-300">
                <Link href={`/product/${product.slug}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                </Link>
                <div className="flex flex-col justify-center align-middle items-center">
                <h3 className="mt-4 text-base font-extrabold text-gray-700">{product.name}</h3>
                <h5 className="mt-4 text-sm text-gray-700">{product.categoryName}</h5>
                <p className="mt-1 text-lg font-medium text-gray-900 line-through opacity-75">{product.bprice}$</p>
                <p className="mt-1 text-lg text-gray-900 font-bold">{product.aprice}$</p>
                <AddToCart image={product.imageUrl} currency="USD" name={product.name} description={product.description} price={product.aprice} _id={product._id} price_id={""}/>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }