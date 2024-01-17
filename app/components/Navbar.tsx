"use client";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/app/logo.jpeg";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { count } from "console";

const links = [
  { name: "Home", href: "/" },
  { name: "Male", href: "/Male" },
  { name: "Female", href: "/Female" },
  { name: "Kids", href: "/Kids" },
  { name: "All Products", href: "/All-Products" },
  { name: "Live Sale", href: "/Live-Sale" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const handleNav = () => {
    setMenu(!menu);
  };
  const {handleCartClick,cartCount}=useShoppingCart()

  return (
    <div className="relative flex justify-between items-center  sm:px-20  py-8 px-3 shadow-md">
      <Link href={"/"}>
      <Image className="h-[68px] w-[74px] rounded-full" src={logo} alt="logo" />
      </Link>
      {/* options */}
      <div>
        <ul className="relative hidden md:flex flex-row justify-center items-center gap-x-6 ">
          {links.map((link, id) => (
            <div key={id}>
              {pathname === link.href ? (
                <li>
                  <Link
                    className="text-lg relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-full
                before:h-1
                before:rounded-full
                before:opacity-100
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-800
                before:via-blue-400
                before:to-blue-300
                "
                    href={link.href}
                    onClick={handleNav}
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-lg relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-800
                before:via-blue-400
                before:to-blue-300
                hover:before:w-full
                hover:before:opacity-100"
                    href={link.href}
                    onClick={handleNav}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      {/* shopping cart */}
      <div onClick={handleCartClick} className="relative hidden bg-gray-200 rounded-full h-11 w-12 md:flex md:justify-center md:items-center hover:shadow-lg bg-white-400">
        <p className="absolute flex justify-center bottom-8 right-0 text-white rounded-full p-0 w-6 bg-red-600">{cartCount}</p>
        <ShoppingCart className=""  />
        
        
        
      </div>
      <div onClick={handleNav} className="md:hidden">
        <Menu absoluteStrokeWidth />
      </div>
      <div
        className={
          menu
            ? "sticky w-[40%] rounded-br-3xl rounded-tr-md md:hidden h-full inset-0 bg-purple-400 bg-opacity-40 backdrop-filter backdrop-blur-sm p-10 ease-in duration-500 left-0 "
            : "left-[-100%] hidden"
        }
      >
        <div className="grid grid-cols-1 gap-4">
          {/* <div className=" bg-gray-200 rounded-full h-9 w-9 flex justify-center items-center hover:shadow-lg bg-white-400">
            <ShoppingCart />
          </div> */}
          <div onClick={handleCartClick} className="bg-gray-200 rounded-full h-9 w-9 flex justify-center items-center hover:shadow-lg bg-white-400">
        
        <ShoppingCart className=""  />
        
        
        
      </div>
          <div>
          <div>
        <ul className="relative flex md:hidden flex-col justify-start gap-y-6 ">
          {links.map((link, id) => (
            <div key={id}>
              {pathname === link.href ? (
                <li>
                  <Link
                    className="text-lg relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-full
                before:h-1
                before:rounded-full
                before:opacity-100
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-800
                before:via-blue-400
                before:to-blue-300
                "
                    href={link.href}
                    onClick={handleNav}
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-lg relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-800
                before:via-blue-400
                before:to-blue-300
                hover:before:w-full
                hover:before:opacity-100"
                    href={link.href}
                    onClick={handleNav}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
