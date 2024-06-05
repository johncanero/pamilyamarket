/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import Image from "next/image"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs-pamilya"

import { MapPinned } from 'lucide-react';
import { BsMessenger } from "react-icons/bs";

import SheetMobileTablet from "./SheetMobileTablet";

import { motion } from "framer-motion"

export function NavbarTabs() {
    return (
        <div className="flex justify-between mx-8 md:mx-16">
            <Tabs defaultValue="home" className="hidden lg:block md:w-[240px]">
                <TabsList className="grid w-full grid-cols-2 gap-x-1">
                    {/* Pamilya */}
                    <Link href="/">
                        <TabsTrigger value="home">
                            <div className="flex md:gap-x-1">
                                <p className="md:text-base text-sm">Pamilya</p>
                            </div>
                        </TabsTrigger>
                    </Link>

                    {/* Location */}
                    <Link href="/location">
                        <TabsTrigger value="location">
                            <div className="flex gap-x-1">
                                {/* <MapPinned size={20} className="md:mt-1 text-amber-700" /> */}
                                <p className="md:text-base text-sm">Location</p>
                            </div>
                        </TabsTrigger>
                    </Link>
                </TabsList>
            </Tabs>
            
            {/* Pamilya Market Logo - Mobile & Tablet */}
            <Link
                href="/"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="lg:hidden flex gap-x-1">
                    <Image
                        src="/images/logo/pamilyaMarketTextwithLogo.png"
                        width={128}
                        height={128}
                        alt="pamilya-market-logo"
                    />
                </motion.div>
            </Link>

            {/* Pamilya Market Tagline - Desktop */}
            <div className="hidden lg:block">
                <div className="flex gap-x-4">
                    <p className="italic mt-3">
                        <span className="font-bold">Fairview's freshest! ‍</span>
                        Nourish your family with quality meats, fish, veggies & more.
                    </p>

                    {/* Messenger */}
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://m.me/pamilyamarketph"
                    >
                        <BsMessenger size={25} className="mt-2 text-orange-500 hover:text-orange-600" />
                    </Link>
                </div>
            </div>

            {/* Pamilya Market - Taglline (sm-md) */}
            <div className="lg:hidden">
                <div className="flex gap-x-4">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://m.me/pamilyamarketph"
                    >
                        {/* <BsMessenger size={24} className="mt-3 text-amber-700 hover:text-amber-800" /> */}
                    </Link>

                    <SheetMobileTablet />
                </div>
            </div>
        </div>
    )
}
