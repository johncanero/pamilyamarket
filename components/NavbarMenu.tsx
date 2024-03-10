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

export function NavbarMenu() {
    return (
        <Tabs defaultValue="home" className="w-[300px] mx-8 md:mx-16">
            <TabsList className="grid w-full grid-cols-2 gap-x-1">
                <Link href="/">
                    <TabsTrigger value="home">
                        <div className="flex gap-x-1">
                            <Image
                                src="/images/logo/pamilyaMarketLogoBlack.png"
                                width={24}
                                height={24}
                                alt="pamilya-market-logo-black"
                            />
                            <p>Pamilya</p>
                        </div>
                    </TabsTrigger>
                </Link>

                <Link href="/">
                    <TabsTrigger value="location">
                        <div className="flex gap-x-2">
                            <MapPinned size={18} className="mt-1 text-zinc-800"/>
                            <p>Location</p>
                        </div>
                    </TabsTrigger>
                </Link>
            </TabsList>
        </Tabs>
    )
}
