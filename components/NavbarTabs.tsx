/* eslint-disable react/no-unescaped-entities */
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

export function NavbarTabs() {
    return (
        <div className="flex justify-between mx-8 md:mx-16">
            <Tabs defaultValue="home" className="w-[220px] md:w-[300px]">
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
                        <BsMessenger size={20} className="mt-2 text-amber-700 hover:text-amber-800" />
                    </Link>
                </div>
            </div>

            {/* Pamilya Market - Taglline (sm-md) */}
            <div className="lg:hidden">
                <div className="flex gap-x-3">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://m.me/pamilyamarketph"
                    >
                        <BsMessenger size={24} className="mt-3 text-amber-700 hover:text-amber-800" />
                    </Link>

                    <SheetMobileTablet />
                </div>
            </div>
        </div>
    )
}
