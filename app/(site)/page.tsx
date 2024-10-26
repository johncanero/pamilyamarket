'use client';

import Image from "next/image";
import Link from "next/link";
import Cards from "@/components/Cards";
import { Button } from "@/components/ui/button"

const hover = {
  variantA: { scale: 1 },
  variantB: { scale: 1.25 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Card */}
      <div className="p-5 md:p-10 antialiased">
        <div
          className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
          <div className="lg:w-6/12  bg-amber-600 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
            <div className="cursor-pointer">
              {/* Mobile */}
              <Link
                rel="noopener noreferrer"
                href="/"
              >
                <Image
                  src="/images/home/PamilyaMarket_Products_Compressed.jpg"
                  width={1600}
                  height={1600}
                  alt="products"
                  className="rounded-t-2xl lg:hidden"
                />
              </Link>
            </div>
            {/* Description */}
            <div className="py-8 lg:py-36">
              <div className="pb-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mt-4">
                  Fresh
                </h1>
                <p className="text-md lg:text-lg justify-start text-white mt-2 mx-8 md:mx-32 lg:mx-20 leading-relaxed">
                  Discover and find fresh products of Pamilya Market. <span className="font-semibold">Chicken, Pork, Beef, Fish, Vegetables & Ingredients!</span>
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-center mt-4 mb-8">
                <Link
                  // target="_blank"
                  rel="noopener noreferrer"
                  href="/"
                >
                  <Button className="text-lg rounded-full w-full py-8 px-14 font-semibold">Explore Products</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Tablet & Desktop */}
          <div className="cursor-pointer">
            <Link
              rel="noopener noreferrer"
              href="/"
            >
              <Image
                src="/images/home/PamilyaMarket_Products_Compressed.jpg"
                width={1600}
                height={1600}
                alt="products"
                className="rounded-r-2xl hidden lg:block"
              />
            </Link>
          </div>
        </div>
      </div>

      <Cards />
    </div >
  );
}
