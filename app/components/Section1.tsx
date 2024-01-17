import React from "react";
import Link from "next/link";
import { IdataTypes } from "./sub-components/Interface_type";
import { GetNewArrivals } from "@/ecomerce-project/sanity-utils";
import AddToCart from "./sub-components/AddToCart";

async function Section1() {
  const data: IdataTypes[] = await GetNewArrivals();
  return (
    <>
      <div>
        {/* Headind and text */}
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl md:text-5xl font-bold animate-bounce pt-5">
            New Arrivals Products
          </h1>
          <p className="text-lg md:text-2xl font-light w-[80%]">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </p>
        </div>

        {/* images */}

        <section className="text-gray-600 body-font">
          <div className=" container px-5 pb-24 pt-16 md:pb-5 lg:pb-0 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {data.map((items, idx) => (
                <div
                  key={items._id}
                  className="p-4 md:w-1/3 sm:mb-0 mb-6  gap-2 opacity-80 hover:opacity-100 hover:-translate-y-12 duration-500 delay-300"
                >
                  <Link href={`/product/${items.slug}`}>
                    <div className="rounded-lg h-auto md:h-[45%] overflow-hidden">
                      <img
                        alt={items.name}
                        className="object-cover object-center h-full w-full "
                        src={items.imageUrl}
                      />
                    </div>
                  </Link>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                    {items.name}
                  </h2>
                  <h4 className="text-lg font-medium title-font opacity-40 text-gray-900 mt-5">
                    {items.categoryName}
                  </h4>
                  <h2 className="text-lg font-medium title-font text-gray-900 mt-5">
                    {items.aprice}$
                  </h2>
                  <p className="text-base leading-relaxed mt-2">
                    {items.description}
                  </p>
                  <AddToCart
                    image={items.imageUrl}
                    currency="USD"
                    name={items.name}
                    description={items.description}
                    price={items.aprice}
                    _id={items._id}
                    price_id={""}
                  />
                  <Link href={`/All-Products`}>
                    <div className="text-pink-500 hover:text-black bg-pink-100 pl-2 rounded-3xl inline-flex items-center mt-3 cursor-pointer hover:px-4 delay-300 duration-200">
                      See More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2 "
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Section1;
