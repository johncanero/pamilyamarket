'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const hover = {
  variantA: { scale: 1 },
  variantB: { scale: 1.25 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pamilya Market Logo */}
      <motion.div
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
          className="mx-auto lg:mt-28 mt-16 max-w-xs md:max-w-full"
        />
      </motion.div>
      
      {/* DTI Registration */}
      <div className="p-5 md:p-10 antialiased ">
        <div
          className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
          <div className="lg:w-6/12">
            {/* DTI Registration - Mobile*/}
            <div className="cursor-pointer">
              <Link
                // target="_blank"
                rel="noopener noreferrer"
                href="/registration"
              >
                <Image
                  src="/images/home/card01dtiRegistartion.png"
                  width={1600}
                  height={1600}
                  alt="dti-registartion"
                  className="rounded-t-2xl lg:hidden"
                />
              </Link>
            </div>

            {/* Description */}
            <div className="p-5 pb-10">
              <h1 className="text-xl font-semibold text-gray-800 mt-4">
                DTI Registration - Pamilya Marketplace
              </h1>
              <p className=" text-lg text-gray-400 mt-2 leading-relaxed">
                Located in Fairview, Quezon City, NCR - National Capital Region, Second District
              </p>
            </div>

            {/* Pamilya Market - logo */}
            <div className="flex justify-center">
              <Image
                src="/images/home/pamilyaMarketLogo.png"
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
                href="/registration"
              >
                <Button className="text-lg rounded-full py-8 px-16 font-semibold">See Registration</Button>
              </Link>
            </div>
          </div>


          {/* DTI Registration - Desktop*/}
          <div className="cursor-pointer">
            <Link
              // target="_blank"
              rel="noopener noreferrer"
              href="/registration"
            >
              <Image
                src="/images/home/card01dtiRegistartion.png"
                width={1600}
                height={1600}
                alt="dti-registartion"
                className="rounded-2xl hidden lg:block"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Floor Plan */}
      <div className="p-5 md:p-10 antialiased ">
        <div
          className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
          <div className="lg:w-6/12">
            {/* Floor Plan - Mobile*/}
            <div className="cursor-pointer">
              <Link
                // target="_blank"
                rel="noopener noreferrer"
                href="/blueprint"
              >
                <Image
                  src="/images/home/card02floorPlan.png"
                  width={1600}
                  height={1600}
                  alt="blueprint"
                  className="rounded-t-2xl lg:hidden"
                />
              </Link>
            </div>

            {/* Description */}
            <div className="p-5 pb-10">
              <h1 className="text-xl font-semibold text-gray-800 mt-4">
                Blueprint - Floor Plan
              </h1>
              <p className=" text-lg text-gray-400 mt-2 leading-relaxed">
                Discover and navigate the spaces and areas of Pamilya Market
              </p>
            </div>

            {/* Pamilya Market - logo */}
            <div className="flex justify-center">
              <Image
                src="/images/home/pamilyaMarketLogo.png"
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
                href="/blueprint"
              >
                <Button className="text-lg rounded-full py-8 px-16 font-semibold">Navigate Floor Plan</Button>
              </Link>
            </div>
          </div>


          {/* Floor Plan - Desktop */}
          <div className="cursor-pointer">
            <Link
              // target="_blank"
              rel="noopener noreferrer"
              href="/blueprint"
            >
              <Image
                src="/images/home/card02floorPlan.png"
                width={1600}
                height={1600}
                alt="blueprint"
                className="rounded-2xl hidden lg:block"
              />
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
