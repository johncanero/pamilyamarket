/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import * as SheetPrimitive from "@radix-ui/react-dialog"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import { IoIosMenu } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { BsMessenger } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegRegistered } from "react-icons/fa6";
import { MdArchitecture } from "react-icons/md";

import { motion } from "framer-motion"

const SheetClose = SheetPrimitive.Close

// navigaiton links
import { useActivePath } from '../app/helper'

// Reference: https://nikolasbarwicki.com/articles/highlight-currently-active-link-in-nextjs-13-with-app-router/

const SheetMobileTablet = () => {
    const checkActivePath = useActivePath()

    return (
        <Sheet>
            <SheetTrigger>
                <IoIosMenu size={32} className='mt-1 text-zinc-800 hover:text-amber-800' />
            </SheetTrigger>
            <SheetContent>
                {/* Logo */}
                <SheetHeader>
                    <SheetTitle>
                        <Link
                            href="/"

                        >
                            <SheetPrimitive.Close>
                                <div className='flex justify-between gap-x-2'>
                                    <Image
                                        src="/images/logo/pamilyaMarketLogo.png"
                                        width={68}
                                        height={68}
                                        alt="pamilya-market-logo"
                                        className="md:w-24"
                                    />
                                    <Image
                                        src="/images/logo/pamilyaMarketText.png"
                                        width={100}
                                        height={100}
                                        alt="pamilya-market-logo-text"
                                        className='w-48 md:w-60'
                                    />
                                </div>
                            </SheetPrimitive.Close>
                        </Link>
                    </SheetTitle>
                </SheetHeader>

                <div>
                    <SheetDescription>
                        <hr></hr>
                    </SheetDescription>
                    <SheetDescription>
                        <p className='my-3 mx-3 text-lg'>Menu</p>
                        <div>
                            {/* Home */}
                            <Link
                                href="/"
                                className={`active ${checkActivePath("/") ? 'font-semibold text-amber-600' : ''}`}

                            >
                                <SheetPrimitive.Close>
                                    <div className='grid grid-cols-7 px-3 hover:bg-orange-200 hover:rounded-xl'>
                                        <TiHome size={24} className='text-amber-600' />
                                        <p className='text-lg'>Home</p>
                                    </div>
                                </SheetPrimitive.Close>
                            </Link>

                            {/* Location */}
                            <Link
                                href="/location"
                                className={`active ${checkActivePath("/location") ? 'font-semibold text-amber-600' : ''}`}
                            >
                                <SheetPrimitive.Close>
                                    <div className='grid grid-cols-7 py-3 px-3 hover:bg-orange-200 hover:rounded-xl'>
                                        <FaLocationDot size={16} className='ml-1 mt-1 text-amber-600' />
                                        <p className='text-lg'>Location</p>
                                    </div>
                                </SheetPrimitive.Close>
                            </Link>

                            {/* Blueprint */}
                            <Link
                                href="/blueprint"
                                className={`active ${checkActivePath("/blueprint") ? 'font-semibold text-amber-600' : ''}`}
                            >
                                <SheetPrimitive.Close>
                                    <div className='grid grid-cols-7 py-3 px-3 hover:bg-orange-200 hover:rounded-xl'>
                                        <MdSpaceDashboard size={16} className='ml-1 mt-1 text-amber-600' />
                                        <p className='text-lg'>Blueprint</p>
                                    </div>
                                </SheetPrimitive.Close>
                            </Link>

                            {/* Design */}
                            <Link
                                href="/design"
                                className={`active ${checkActivePath("/design") ? 'font-semibold text-amber-600' : ''}`}
                            >
                                <SheetPrimitive.Close>
                                    <div className='grid grid-cols-7 py-3 px-3 hover:bg-orange-200 hover:rounded-xl'>
                                        <MdArchitecture size={22} className='mt-1 text-amber-600' />
                                        <p className='text-lg'>Design</p>
                                    </div>
                                </SheetPrimitive.Close>
                            </Link>

                            {/* Registration */}
                            <Link
                                href="/registration"
                                className={`active ${checkActivePath("/registration") ? 'font-semibold text-amber-600' : ''}`}
                            >
                                <SheetPrimitive.Close>
                                    <div className='grid grid-cols-7 py-3 px-3 hover:bg-orange-200 hover:rounded-xl'>
                                        <FaRegRegistered size={17} className='ml-1 mt-1 text-amber-600' />
                                        <p className='text-lg'>Registration</p>
                                    </div>
                                </SheetPrimitive.Close>
                            </Link>
                        </div>
                    </SheetDescription>

                    <SheetDescription>
                        <hr></hr>
                    </SheetDescription>

                    <SheetDescription>
                        <div>
                            <SheetPrimitive.Close>
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://m.me/pamilyamarketph"
                                    className={`active ${checkActivePath("http://m.me/pamilyamarketph") ? 'font-semibold text-amber-600' : ''}`}
                                >
                                    <div className='flex gap-x-4 py-3 px-3 hover:bg-orange-200 hover:rounded-xl'>
                                        <BsMessenger size={16} className='ml-1 mt-1 text-amber-600' />
                                        <p className='text-lg'>Chat in Messenger</p>
                                    </div>
                                </Link>
                            </SheetPrimitive.Close>
                        </div>
                    </SheetDescription>


                    <SheetDescription>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 }
                            }}
                        >
                            <p className="italic mt-12 text-black px-3">
                                <span className="font-bold">Fairview's freshest! ‍</span>
                                Nourish your family with quality meats, fish, veggies & more.
                            </p>
                        </motion.div>
                    </SheetDescription>
                </div>
            </SheetContent>
        </Sheet>

    )
}

export default SheetMobileTablet