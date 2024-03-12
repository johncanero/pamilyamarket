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

export function NavbarTabs() {
    return (
        <div className="flex justify-between mx-8 md:mx-16">
            <Tabs defaultValue="home" className="w-[200px] md:w-[300px]">
                <TabsList className="grid w-full grid-cols-2 gap-x-1">
                    <Link href="/">
                        <TabsTrigger value="home">
                            <div className="flex">
                                <Image
                                    src="/images/logo/pamilyaMarketLogoBlack.png"
                                    width={25}
                                    height={25}
                                    alt="pamilya-market-logo-black"
                                />
                                <p className="md:text-base text-sm">Pamilya</p>
                            </div>
                        </TabsTrigger>
                    </Link>

                    <Link href="/">
                        <TabsTrigger value="location">
                            <div className="flex gap-x-1">
                                <MapPinned size={18} className="md:mt-1 text-zinc-800" />
                                <p className="md:text-base text-sm">Location</p>
                            </div>
                        </TabsTrigger>
                    </Link>
                </TabsList>
            </Tabs>

            <div className="hidden lg:block mt-3">
                <p className="italic">
                    <span className="font-bold">Fairview's freshest! ‍</span>
                    Nourish your family with quality meats, fish, veggies & more.
                </p>
            </div>
        </div>
    )
}
