"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./Interface_type";

export default function AddToCart({
  name,
  currency,
  description,
  price,
  image,
  price_id,
}: ProductCart) {
  const { addItem ,handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image,
    price_id: price_id,
  };
  
  return (
    <Button
    onClick={() => {
      addItem(product),handleCartClick();
    }}
    className="w-full bg-black font-bold hover:bg-white text-white hover:text-red-600"
  >
    Add To Cart{" "}
    <span className="px-6">
      <ShoppingBasket />
    </span>
  </Button>
  );
}
