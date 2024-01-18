import { ICategoryProduct } from "@/app/components/sub-components/Interface_type";
import { Button } from "@/components/ui/button";
import { GetCategoryPage } from "@/ecomerce-project/sanity-utils";
import Link from "next/link";
import React from "react";
import AddToCart from "../components/sub-components/AddToCart";
import Image from "next/image";

export default async function page({ params }: { params: { slug: string } }) {
  const data: ICategoryProduct = await GetCategoryPage(params.slug);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold pb-12 text-white  ">
          Category {params.slug}
        </h1>
        <div className="flex flex-wrap -m-4">
          {data.map((products: any) => (
            <div key={products._id} className="lg:w-1/4  md:w-1/2 p-4 w-4/5 ">
              <Link href={`/product/${products.slug}`}>
                <Image
                  alt={products.name}
                  className="hover:scale-90 delay-500 duration-700 object-center w-full block relative h-96 object-cover border-sky-300 rounded overflow-hidden"
                  src={products.imageUrl}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {products.categoryName}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {products.name}
                </h2>
                {products.sale === "yes" ? (
                  <>
                    {" "}
                    <p className="title-font font-medium text-lg opacity-60 text-gray-900 line-through">
                      {products.bprice}$
                    </p>
                    <p className="title-font font-medium text-2xl text-gray-900">
                      {products.aprice}$
                    </p>
                  </>
                ) : (
                  <p className="title-font font-medium text-2xl text-gray-900">
                    {products.aprice}$
                  </p>
                )}
                <AddToCart
                  image={products.imageUrl}
                  currency="USD"
                  name={products.name}
                  description={products.description}
                  price={products.aprice}
                  _id={products._id}
                  price_id={""}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
