/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from "next/link"
import Image from "next/image"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs-pamilya"
import { motion } from "framer-motion"


// navigaiton links
import { useActivePath } from '../app/helper'
type NavigationItem = {
    href: string
    name: string
}

const navigation: NavigationItem[] = [
    { href: '/', name: 'Pamilya' },
    { href: '/location', name: 'Location' },
]

// Reference: https://nikolasbarwicki.com/articles/highlight-currently-active-link-in-nextjs-13-with-app-router/

import { BsMessenger } from "react-icons/bs";
import SheetMobileTablet from "./SheetMobileTablet";
import NavbarMobileTagline from "./NavbarMobileTagline"

export function NavbarTabs() {
    const checkActivePath = useActivePath()

    return (
        <div className="lg:flex lg:justify-between lg:px-16">
            {/* Desktop */}
            <Tabs defaultValue="home" className="hidden lg:block md:w-[240px]">
                <TabsList className="grid w-full grid-cols-2 gap-x-1">
                    {/* pages */}
                    <ul className="flex gap-x-2">
                        {navigation.map(({ href, name }) => (
                            <li key={href}>
                                <Link
                                    rel="noopener noreferrer"
                                    href={href}
                                    className={`active ${checkActivePath(href) ? '' : 'text-stone-600'}`}
                                >
                                    <TabsTrigger value={href}>
                                        <div className="flex md:gap-x-1">
                                            <span className="md:text-base">{name}</span>
                                        </div>
                                    </TabsTrigger>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </TabsList>
            </Tabs>

            {/* Mobile */}
            <div className="lg:hidden">
                <NavbarMobileTagline />

                <div className="flex justify-between mx-6 mt-2 md:mt-3 ">
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
            </div>

            {/* Pamilya Market Tagline - Desktop */}
            <div className="hidden lg:block">
                <div className="flex gap-x-4">
                    <p className="italic mt-3">
                        <span className="font-bold">Fairview's pinaka-sariwa! ‍</span>
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
