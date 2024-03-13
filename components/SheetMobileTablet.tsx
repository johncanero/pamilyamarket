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

import { motion } from "framer-motion"

const SheetClose = SheetPrimitive.Close

const SheetMobileTablet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <IoIosMenu size={32} className='mt-1 text-zinc-800 hover:text-amber-800' />
            </SheetTrigger>
            <SheetContent>
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
                            <Link
                                href="/"

                            >
                                <SheetPrimitive.Close>
                                    <div className='grid grid-cols-7 py-3 px-3 hover:bg-orange-200 hover:rounded-xl'>
                                        <TiHome size={24} className='text-amber-600' />
                                        <p className='text-lg'>Home</p>
                                    </div>
                                </SheetPrimitive.Close>
                            </Link>

                            <Link
                                href="/location"
                            >
                                <SheetPrimitive.Close>
                                    <div className='grid grid-cols-7 py-3 px-3 hover:bg-orange-200 hover:rounded-xl'>
                                        <FaLocationDot size={16} className='ml-1 mt-1 text-amber-600' />
                                        <p className='text-lg'>Location</p>
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