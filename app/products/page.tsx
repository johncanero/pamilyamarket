import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'


export const metadata: Metadata = {
    title: "Products | Pamilya Market",
    description: "Fairview's freshest! Nourish your family with quality meats, fish, veggies & more.",
    icons: {
        icon: '/images/logo/pamilyaMarketLogo.png',
        shortcut: '/images/logo/pamilyaMarketLogo.png',
    },
};

const page = () => {
    return (
        <div>
            <div className="flex flex-col">
                {/* Pamilya Market Logo */}
                <Image
                    src="/images/logo/pamilyaMarketLogo.png"
                    width={350}
                    height={350}
                    alt="pamilya-market-logo"
                    className="mx-auto lg:my-24 my-16 max-w-xs md:max-w-full"
                />
            </div>
        </div>
    )
}

export default page