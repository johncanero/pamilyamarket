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
            {/* Cards - Products - Desktop */}
            <div className='md:mx-10 mx-5 hidden lg:block'>
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

                        {/* Grocery Stall Card */}
                        <CarouselItem
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="relative flex w-full lg:max-w-[26rem] max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                                {/* Card - Grocery Stall Contents */}
                                <div
                                    className="relative overflow-hidden text-white shadow-lg rounded-t-2xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 cursor-pointer">
                                    {/* Card - Grocery Stall */}
                                    <Image
                                        src="/images/home/card08-grocery.png"
                                        width={1000}
                                        height={1000}
                                        alt="grocery-stall-card-product" />

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

                                {/* Card - Grcery Button */}
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
                        {/* <CarouselItem
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
                        </CarouselItem> */}

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

            {/* Cards - Products: Meat, Vegetables  Chicken - Mobile & Tablet */}
            <div className='md:mx-10 mx-5 block lg:hidden'>
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
                        <div className="lg:w-6/12  bg-amber-600 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                            {/* Location - Mobile*/}
                            <div className="cursor-pointer">
                                <Link
                                    // target="_blank"
                                    rel="noopener noreferrer"
                                    href="/location"
                                >
                                    <Image
                                        src="/images/home/PamilyaMarket_Location_Compressed.jpg"
                                        width={1600}
                                        height={1600}
                                        alt="location"
                                        className="rounded-t-2xl lg:hidden"
                                    />
                                </Link>
                            </div>

                            {/* Description */}
                            <div className="py-8 lg:py-36">
                                <div className="pb-4">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mt-4">
                                        Where?
                                    </h1>
                                    <p className="text-md lg:text-lg justify-start text-white mt-2 mx-8 md:mx-32 lg:mx-20 leading-relaxed">
                                        Discover the <span className='font-bold'>location</span> of Pamilya Market.
                                    </p>
                                </div>

                                {/* Button */}
                                <div className="flex justify-center mt-4 mb-8">
                                    <Link
                                        // target="_blank"
                                        rel="noopener noreferrer"
                                        href="/location"
                                    >
                                        <Button className="text-lg rounded-full w-full py-8 px-14 font-semibold">Explore Pamilya Market</Button>
                                    </Link>
                                </div>
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
                                    src="/images/home/PamilyaMarket_Location_Compressed.jpg"
                                    width={1600}
                                    height={1600}
                                    alt="location"
                                    className="rounded-r-2xl hidden lg:block"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Cards - Products: Grocery Stall, Buko Stall & Fish Stall - Mobile & Tablet */}
                <div className='md:mx-10 mx-5 block lg:hidden'>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-xs md:max-w-2xl lg:max-w-full"
                    >
                        <CarouselContent className='gap-x-2'>
                            {/* Grocery Stall Card */}
                            <CarouselItem
                                className="md:basis-1/2 lg:basis-1/4"
                            >
                                <div className="relative flex w-full lg:max-w-[26rem] max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                                    {/* Card - Grocery Stall Contents */}
                                    <div
                                        className="relative overflow-hidden text-white shadow-lg rounded-t-2xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 cursor-pointer">
                                        {/* Card - Grocery Stall */}
                                        <Image
                                            src="/images/home/card08-grocery.png"
                                            width={1000}
                                            height={1000}
                                            alt="grocery-stall-card-product" />

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

                                    {/* Card - Grcery Button */}
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

                {/* Floor Plan */}
                <div className="p-5 md:p-10 antialiased ">
                    <div
                        className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
                        <div className="lg:w-6/12  bg-amber-600 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                            {/* Blueprint - Mobile*/}
                            <div className="cursor-pointer">
                                <Link
                                    // target="_blank"
                                    rel="noopener noreferrer"
                                    href="/blueprint"
                                >
                                    <Image
                                        src="/images/home/PamilyaMarket_Blueprint_Compressed.jpg"
                                        width={1600}
                                        height={1600}
                                        alt="blueprint"
                                        className="rounded-t-2xl lg:hidden"
                                    />
                                </Link>
                            </div>
                            {/* Description */}
                            <div className="py-8 lg:py-36">
                                <div className="pb-4">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mt-4">
                                        Blueprint
                                    </h1>
                                    <p className="text-md lg:text-lg text-center text-white mt-2 mx-8 md:mx-32 lg:mx-20 leading-relaxed">
                                        Navigate the spaces and areas of Pamilya Market
                                    </p>
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
                        </div>

                        {/* Floor Plan - Desktop */}
                        <div className="cursor-pointer">
                            <Link
                                // target="_blank"
                                rel="noopener noreferrer"
                                href="/blueprint"
                            >
                                <Image
                                    src="/images/home/PamilyaMarket_Blueprint_Compressed.jpg"
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
                        <div className="lg:w-6/12  bg-amber-600 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                            {/* Design - Mobile*/}
                            <div className="cursor-pointer">
                                <Link
                                    // target="_blank"
                                    rel="noopener noreferrer"
                                    href="/design"
                                >
                                    <Image
                                        src="/images/home/PamilyaMarket_Design_Compressed.jpg"
                                        width={1600}
                                        height={1600}
                                        alt="design"
                                        className="rounded-t-2xl lg:hidden"
                                    />
                                </Link>
                            </div>

                            {/* Description */}
                            <div className="py-8 lg:py-36">
                                <div className="pb-4">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mt-4">
                                        Design
                                    </h1>
                                    <p className="text-md lg:text-lg text-center text-white mt-2 mx-8 md:mx-32 lg:mx-20 leading-relaxed">
                                        View the design of Pamilya Market
                                    </p>
                                </div>

                                {/* Button */}
                                <div className="flex justify-center mt-4 mb-8">
                                    <Link
                                        // target="_blank"
                                        rel="noopener noreferrer"
                                        href="/"
                                    >
                                        <Button className="text-lg rounded-full w-full py-8 px-14 font-semibold">View Design</Button>
                                    </Link>
                                </div>
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
                                    src="/images/home/PamilyaMarket_Design_Compressed.jpg"
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
                        <div className="lg:w-6/12  bg-amber-600 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                            {/* DTI Registration - Mobile*/}
                            <div className="cursor-pointer">
                                <Link
                                    // target="_blank"
                                    rel="noopener noreferrer"
                                    href="/registration"
                                >
                                    <Image
                                        src="/images/home/PamilyaMarket_Registration_compressed.png"
                                        width={1600}
                                        height={1600}
                                        alt="dti-registartion"
                                        className="rounded-t-2xl lg:hidden"
                                    />
                                </Link>
                            </div>

                            {/* Description */}
                            <div className="py-8 lg:py-36">
                                <div className="pb-4">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mt-4">
                                        DTI Registration 
                                    </h1>
                                    <p className="text-md lg:text-lg justify-start text-white mt-2 mx-8 md:mx-32 lg:mx-20 leading-relaxed">
                                        Located in Fairview, Quezon City, NCR - National Capital Region, Second District
                                    </p>
                                </div>

                                {/* Button */}
                                <div className="flex justify-center mt-4 mb-8">
                                    <Link
                                        // target="_blank"
                                        rel="noopener noreferrer"
                                        href="/"
                                    >
                                        <Button className="text-lg rounded-full w-full py-8 px-14 font-semibold">See Registration</Button>
                                    </Link>
                                </div>
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
                                    src="/images/home/PamilyaMarket_Registration_compressed.png"
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