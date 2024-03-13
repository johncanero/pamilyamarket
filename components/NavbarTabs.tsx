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
            <Tabs defaultValue="home" className="hidden lg:block md:w-[300px]">
                <TabsList className="grid w-full grid-cols-2 gap-x-1">
                    <Link href="/">
                        <TabsTrigger value="home">
                            <div className="flex md:gap-x-1">
                                <Image
                                    src="/images/logo/pamilyaMarketLogoBlack.png"
                                    width={24}
                                    height={24}
                                    alt="pamilya-market-logo-black"
                                    className="w-7 md:w-8"
                                />
                                <p className="md:text-base text-sm">Pamilya</p>
                            </div>
                        </TabsTrigger>
                    </Link>

                    <Link href="/location">
                        <TabsTrigger value="location">
                            <div className="flex gap-x-1">
                                <MapPinned size={20} className="md:mt-1 text-amber-700" />
                                <p className="md:text-base text-sm">Location</p>
                            </div>
                        </TabsTrigger>
                    </Link>
                </TabsList>
            </Tabs>

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

            {/* Pamilya Market - Taglline (lg) */}
            <div className="hidden lg:block">
                <div className="flex gap-x-4">
                    <p className="italic mt-3">
                        <span className="font-bold">Fairview's freshest! ‍</span>
                        Nourish your family with quality meats, fish, veggies & more.
                    </p>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://m.me/pamilyamarketph"
                    >
                        <BsMessenger size={25} className="mt-2 text-amber-700 hover:text-amber-800" />
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
