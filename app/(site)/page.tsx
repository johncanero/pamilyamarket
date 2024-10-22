'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import Cards from "@/components/Cards";
import { Button } from "@/components/ui/button"

const hover = {
  variantA: { scale: 1 },
  variantB: { scale: 1.25 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pamilya Market Logo */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        variants={hover}
        whileHover={"variantB"}
      >
        <Image
          src="/images/logo/pamilyaMarketLogo.png"
          width={350}
          height={350}
          alt="pamilya-market-logo"
          className="mx-auto lg:my-24 my-16 max-w-xs md:max-w-full"
        />
      </motion.div> */}

      {/* Main Feature */}
      <div className="p-5 md:p-10 antialiased">
        <div
          className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
          <div className="lg:w-6/12  bg-amber-600 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
            {/* Main Feature - Mobile*/}
            <div className="cursor-pointer">
              <Link
                // target="_blank"
                rel="noopener noreferrer"
                href="/location"
              >
                <Image
                  src="/images/home/BusinessProducts.jpg"
                  width={1600}
                  height={1600}
                  alt="location"
                  className="rounded-t-2xl lg:hidden"
                />
              </Link>
            </div>

            {/* Description */}
            <div className="p-5 pb-10">
              <h1 className="text-xl font-semibold text-white mt-4">
                Menu
              </h1>
              <p className=" text-lg text-white mt-2 leading-relaxed">
                Discover the products of Pamilya Market
              </p>
            </div>

            {/* Pamilya Market - logo */}
            <div className="flex justify-center">
              <Image
                src="/images/home/pamilyaMarketLogoWhite.png"
                width={200}
                height={200}
                alt="pamilya-market-logo"
                className="rounded-2xl hidden lg:block"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center mt-4 mb-8">
              <Link
                // target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <Button className="text-lg rounded-full w-full py-8 px-14 font-semibold">Explore Products</Button>
              </Link>
            </div>
          </div>

          {/* Main Feature - Desktop */}
          <div className="cursor-pointer">
            <Link
              // target="_blank"
              rel="noopener noreferrer"
              href=""
            >
              <Image
                src="/images/home/BusinessProducts.jpg"
                width={1600}
                height={1600}
                alt="location"
                className="rounded-r-2xl hidden lg:block"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Cards */}
      <Cards />
    </div >
  );
}
