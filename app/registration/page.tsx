
import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'

import { Registration } from '@/components/Registration';

export const metadata: Metadata = {
    title: "Registration | Pamilya Market",
    description: "Fairview's freshest! Nourish your family with quality meats, fish, veggies & more.",
    icons: {
        icon: '/images/logo/pamilyaMarketLogo.png',
        shortcut: '/images/logo/pamilyaMarketLogo.png',
    },
};

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Floor Plan*/}
            <div className="overflow-hidden rounded-md md:my-0 my-7 lg:my-0">
                <Image
                    src="/images/registration/pamilyaMarketDTIRegistrationWebsite-compressed.png"
                    width={300}
                    height={300}
                    alt="pamilya-market-location"
                    className="rounded-2xl mx-auto md:hidden"
                />
            </div>
            <Registration />
        </div>
    )
}

export default page