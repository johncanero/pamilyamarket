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
import { Button } from "@/components/ui/button"

import { MapPinned } from 'lucide-react';
import { BsMessenger } from "react-icons/bs";

import SheetMobileTablet from "./SheetMobileTablet";

import { motion } from "framer-motion"

export function NavbarTabs() {
    return (
        <div className="lg:flex lg:justify-between my-2 md:my-0 mx-6 md:mx-16">
            {/* Desktop */}
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

            <div className="flex justify-between lg:hidden ">
                {/* Pamilya Market Tagline - Mobile & Tablet */}
                <div>
                    <SheetMobileTablet />
                </div>

                {/* Pamilya Market Logo - Mobile & Tablet */}
                <div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Link
                            rel="noopener noreferrer"
                            href="/"
                        >
                            <Image
                                src="/images/logo/pamilyaMarketTextwithLogo.png"
                                width={140}
                                height={140}
                                alt="pamilya-market-logo"
                            />
                        </Link>
                    </motion.div>
                </div>

                <div>
           

                    {/* Messenger */}
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://m.me/pamilyamarketph"
                    >
                        <BsMessenger size={26} className="mt-1 text-orange-500 hover:text-orange-600" />
                    </Link>
                </div>
            </div>

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
        </div>
    )
}
