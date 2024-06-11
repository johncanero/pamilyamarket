/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Cards = () => {
    return (
        <div>
           {/* Cards - Products */}
            <div className='md:mx-10 mx-5 '>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-xs md:max-w-2xl lg:max-w-full"
                >
                    <CarouselContent className='gap-x-2'>
                        {/* Meat Card */}
                        <CarouselItem
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="relative flex w-full lg:max-w-[26rem] max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                                {/* Card - Meat Contents */}
                                <div
                                    className="relative overflow-hidden text-white shadow-lg rounded-t-2xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 cursor-pointer">
                                    {/* Card - Meat */}
                                    <Image
                                        src="/images/home/card05-meat.png"
                                        width={1000}
                                        height={1000}
                                        alt="meat-card-product" />

                                    {/* Black Gradient */}
                                    <div
                                        className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-transparent via-transparent to-black/40">
                                    </div>

                                    {/* Card - Product */}
                                    <p
                                        className="!absolute top-4 left-4 h-8 text-base max-h-[32px] max-w-[32px] select-none rounded-full text-center align-middle font-sans font-semibold text-white transition-all">
                                        Meat
                                    </p>
                                </div>

                                {/* Card - Meat Button */}
                                <div>
                                    <button
                                        className="block w-full select-none rounded-b-xl bg-amber-400 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold  text-amber-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button">
                                        Browse Meat
                                    </button>
                                </div>
                            </div>


                        </CarouselItem>

                        {/* Vegetables Card */}
                        <CarouselItem
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="relative flex w-full lg:max-w-[26rem] max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                                {/* Card - Vegetables Contents */}
                                <div
                                    className="relative overflow-hidden text-white shadow-lg rounded-t-2xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 cursor-pointer">
                                    {/* Card - Vegetables */}
                                    <Image
                                        src="/images/home/card07-vegetables.png"
                                        width={1000}
                                        height={1000}
                                        alt="vegetables-card-product" />

                                    {/* Black Gradient */}
                                    <div
                                        className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-transparent via-transparent to-black/40">
                                    </div>

                                    {/* Card - Product */}
                                    <p
                                        className="!absolute top-4 left-4 h-8 text-base max-h-[32px] max-w-[32px] select-none rounded-full text-center align-middle font-sans font-semibold text-white transition-all">
                                        Vegetables
                                    </p>
                                </div>

                                {/* Card - Vegetables Button */}
                                <div>
                                    <button
                                        className="block w-full select-none rounded-b-xl bg-amber-400 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold  text-amber-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button">
                                        Browse Vegetables
                                    </button>
                                </div>
                            </div>
                        </CarouselItem>

                        {/* Chicken Card */}
                        <CarouselItem
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="relative flex w-full lg:max-w-[26rem] max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                                {/* Card - Chicken Contents */}
                                <div
                                    className="relative overflow-hidden text-white shadow-lg rounded-t-2xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 cursor-pointer">
                                    {/* Card - Chicken */}
                                    <Image
                                        src="/images/home/card06-chicken.png"
                                        width={1000}
                                        height={1000}
                                        alt="chicken-card-product" />

                                    {/* Black Gradient */}
                                    <div
                                        className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-transparent via-transparent to-black/40">
                                    </div>

                                    {/* Card - Product */}
                                    <p
                                        className="!absolute top-4 left-4 h-8 text-base max-h-[32px] max-w-[32px] select-none rounded-full text-center align-middle font-sans font-semibold text-white transition-all">
                                        Chicken
                                    </p>
                                </div>

                                {/* Card - Chicken Button */}
                                <div>
                                    <button
                                        className="block w-full select-none rounded-b-xl bg-amber-400 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold  text-amber-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button">
                                        Browse Chicken
                                    </button>
                                </div>
                            </div>


                        </CarouselItem>

                        {/* Grocery Card */}
                        <CarouselItem
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="relative flex w-full lg:max-w-[26rem] max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                                {/* Card - Grocery Contents */}
                                <div
                                    className="relative overflow-hidden text-white shadow-lg rounded-t-2xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 cursor-pointer">
                                    {/* Card - Grocery */}
                                    <Image
                                        src="/images/home/card08-grocery.png"
                                        width={1000}
                                        height={1000}
                                        alt="grocery-card-product" />

                                    {/* Black Gradient */}
                                    <div
                                        className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-transparent via-transparent to-black/40">
                                    </div>

                                    {/* Card - Product */}
                                    <p
                                        className="!absolute top-4 left-4 h-8 text-base max-h-[32px] max-w-[32px] select-none rounded-full text-center align-middle font-sans font-semibold text-white transition-all">
                                        Grocery
                                    </p>
                                </div>

                                {/* Card - Grocery Button */}
                                <div>
                                    <button
                                        className="block w-full select-none rounded-b-xl bg-amber-400 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold  text-amber-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button">
                                        Browse Grocery Stall
                                    </button>
                                </div>
                            </div>


                        </CarouselItem>

                        {/* Buko Card */}
                        <CarouselItem
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="relative flex w-full lg:max-w-[26rem] max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                    
                                <div
                                    className="relative overflow-hidden text-white shadow-lg rounded-t-2xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 cursor-pointer">
                             
                                    <Image
                                        src="/images/home/card09-buko.png"
                                        width={1000}
                                        height={1000}
                                        alt="buko-card-product" />

                                    <div
                                        className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-transparent via-transparent to-black/40">
                                    </div>

                                    <p
                                        className="!absolute top-4 left-4 h-8 text-base max-h-[32px] max-w-[32px] select-none rounded-full text-center align-middle font-sans font-semibold text-white transition-all">
                                        Buko
                                    </p>
                                </div>

                                <div>
                                    <button
                                        className="block w-full select-none rounded-b-xl bg-amber-400 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold  text-amber-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button">
                                        Browse Buko Stall
                                    </button>
                                </div>
                            </div>
                        </CarouselItem>

                        {/* Fish Card */}
                        <CarouselItem
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="relative flex w-full lg:max-w-[26rem] max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                                {/* Card - Fish Contents */}
                                <div
                                    className="relative overflow-hidden text-white shadow-lg rounded-t-2xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 cursor-pointer">
                                    {/* Card - Fish */}
                                    <Image
                                        src="/images/home/card10-fish.png"
                                        width={1000}
                                        height={1000}
                                        alt="fish-card-product" />

                                    {/* Black Gradient */}
                                    <div
                                        className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-transparent via-transparent to-black/40">
                                    </div>

                                    {/* Card - Product */}
                                    <p
                                        className="!absolute top-4 left-4 h-8 text-base max-h-[32px] max-w-[32px] select-none rounded-full text-center align-middle font-sans font-semibold text-white transition-all">
                                        Fish
                                    </p>
                                </div>

                                {/* Card - Grocery Button */}
                                <div>
                                    <button
                                        className="block w-full select-none rounded-b-xl bg-amber-400 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold  text-amber-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button">
                                        Browse Fish Stall
                                    </button>
                                </div>
                            </div>


                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

            {/* Cards - Pages*/}
            <div className="mb-12">
                {/* Location */}
                <div className="p-5 md:p-10 antialiased">
                    <div
                        className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
                        <div className="lg:w-6/12  bg-amber-500 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                            {/* Location - Mobile*/}
                            <div className="cursor-pointer">
                                <Link
                                    // target="_blank"
                                    rel="noopener noreferrer"
                                    href="/location"
                                >
                                    <Image
                                        src="/images/home/card03Location.png"
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
                                    Location
                                </h1>
                                <p className=" text-lg text-white mt-2 leading-relaxed">
                                    Discover the location of Pamilya Market
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
                                    href="/location"
                                >
                                    <Button className="text-lg rounded-full w-full py-8 px-14 font-semibold">Explore PamilyaMarket</Button>
                                </Link>
                            </div>
                        </div>

                        {/* Location - Desktop */}
                        <div className="cursor-pointer">
                            <Link
                                // target="_blank"
                                rel="noopener noreferrer"
                                href="/location"
                            >
                                <Image
                                    src="/images/home/card03Location.png"
                                    width={1600}
                                    height={1600}
                                    alt="location"
                                    className="rounded-r-2xl hidden lg:block"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Floor Plan */}
                <div className="p-5 md:p-10 antialiased ">
                    <div
                        className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
                        <div className="lg:w-6/12  bg-amber-500 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
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
                                <h1 className="text-xl font-semibold text-white mt-4">
                                    Blueprint - Floor Plan
                                </h1>
                                <p className=" text-lg text-white mt-2 leading-relaxed">
                                    Navigate the spaces and areas of Pamilya Market
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
                                    className="rounded-r-2xl hidden lg:block"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Design */}
                <div className="p-5 md:p-10 antialiased ">
                    <div
                        className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
                        <div className="lg:w-6/12  bg-amber-500 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                            {/* Design - Mobile*/}
                            <div className="cursor-pointer">
                                <Link
                                    // target="_blank"
                                    rel="noopener noreferrer"
                                    href="/design"
                                >
                                    <Image
                                        src="/images/home/card04design-compressed.png"
                                        width={1600}
                                        height={1600}
                                        alt="design"
                                        className="rounded-t-2xl lg:hidden"
                                    />
                                </Link>
                            </div>

                            {/* Description */}
                            <div className="p-5 pb-10">
                                <h1 className="text-xl font-semibold text-white mt-4">
                                    Design
                                </h1>
                                <p className=" text-lg text-white mt-2 leading-relaxed">
                                    View the design of Pamilya Market
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
                                    href="/design"
                                >
                                    <Button className="text-lg rounded-full py-8 px-24 font-semibold">View Design</Button>
                                </Link>
                            </div>
                        </div>

                        {/* Floor Plan - Desktop */}
                        <div className="cursor-pointer">
                            <Link
                                // target="_blank"
                                rel="noopener noreferrer"
                                href="/design"
                            >
                                <Image
                                    src="/images/home/card04design-compressed.png"
                                    width={1600}
                                    height={1600}
                                    alt="blueprint"
                                    className="rounded-r-2xl hidden lg:block"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* DTI Registration */}
                <div className="p-5 md:p-10 antialiased ">
                    <div
                        className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
                        <div className="lg:w-6/12  bg-amber-500 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
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
                                <h1 className="text-xl font-semibold text-white mt-4">
                                    DTI Registration - Pamilya Marketplace
                                </h1>
                                <p className=" text-lg text-white mt-2 leading-relaxed">
                                    Located in Fairview, Quezon City, NCR - National Capital Region, Second District
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
                                    href="/registration"
                                >
                                    <Button className="text-lg rounded-full py-8 px-20 font-semibold">See Registration</Button>
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
                                    className="rounded-r-2xl hidden lg:block"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards