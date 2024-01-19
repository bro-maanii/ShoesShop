"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart} from "use-shopping-cart";
import Link from "next/link";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { error } from "console";


const ShoppingCartModal = () => {
  const {
    
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    addItem,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
    handleCloseCart,
    setItemQuantity,
    
  } = useShoppingCart();
  async function handleCheckout(event:any) {
    event.preventDefault();
    try{
      const result= await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()} >
        <SheetContent className="sm:max-w-lg w-[90vw] bg-gray-300 ">
          <SheetHeader>
            <SheetTitle className="text-6xl font-bold flex justify-center items-center">Cart</SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className="text-2xl font-bold flex justify-center items-center py-6">You do not have any items</h1>
                ) : (

                  <>
                    { 
                    Object.values(cartDetails ?? {}).map((entry) => (
                      <li key={entry.id} className="flex py-6 ">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image
                            src={entry.image as string}
                            alt="Product Image"
                            width={100}
                            height={100}
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{entry.name}</h3>
                              <p className="ml-4">{entry.price * entry.quantity} $</p>
                              
                            </div>

                            <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex flex-row gap-2 justify-center ">
                                    <span  onClick={()=>{
                                          setItemQuantity(entry.id, entry.quantity + 1)
                                            
                                    }} className="bg-red-500 rounded-full"><PlusIcon/></span>
                                    <p className="text-gray-500">
                                        QTY: {entry.quantity}
                                    </p>
                                    <span key={entry.id} onClick={()=>{
                                            if (entry.quantity>1){
                                              setItemQuantity(entry.id, entry.quantity-1);
                                            }
                                    }} className="bg-red-500 rounded-full"><MinusIcon/></span>
                              </div>

                              <div className="flex">
                                <button
                                  onClick={() => removeItem(entry.id)}
                                  type="button"
                                  className="font-medium text-primary pt-4  hover:text-red-600"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
            <div className="border-t border-red-600 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p className="font-semibold text-base">Subtotal</p>
                <p className="font-bold text-2xl italic">{totalPrice} $</p>
              </div>
              <p className="mt-0.5 text-base text-gray-500">
                Shipping and taxes are calculated at checkout
              </p>

              <div className="mt-3">
                <Button
                  
                  className="w-full bg-black text-white hover:bg-slate-700 hover:text-black"
                >
                  Pay now
                </Button>
              </div>
           
              <div className="mt-2 flex justify-center text-center text-sm text-gray-500">
                <Button onClick={handleCloseCart} className="w-full mt-1">Continue shopping</Button>
              </div>
              
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ShoppingCartModal;