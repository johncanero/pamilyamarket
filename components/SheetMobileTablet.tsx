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


import { IoMenu } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";

const SheetClose = SheetPrimitive.Close

const SheetMobileTablet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <IoMenu size={30} className='mt-2 text-zinc-800 hover:text-zinc-900' />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
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
                    </SheetTitle>
                </SheetHeader>

                <div>
                    <SheetDescription>
                        <hr></hr>
                    </SheetDescription>
                    <SheetDescription>
                        <p className='my-3 text-lg'>Menu</p>
                        <div>
                            <Link
                                href="/"
                            >
                                <SheetPrimitive.Close>
                                    <div className='grid grid-cols-7 my-3'>
                                        <TiHome size={24} className='text-amber-600' />
                                        <p className='text-lg'>Home</p>
                                    </div>
                                </SheetPrimitive.Close>
                            </Link>

                            <Link
                                href="/location"
                            >
                                <SheetPrimitive.Close>
                                    <div className='grid grid-cols-7 my-3'>
                                        <FaLocationDot size={16} className='ml-1 mt-1 text-amber-600' />
                                        <p className='text-lg'>Location</p>
                                    </div>
                                </SheetPrimitive.Close>
                            </Link>

                        </div>
                    </SheetDescription>
                </div>

            </SheetContent>
        </Sheet>

    )
}

export default SheetMobileTablet