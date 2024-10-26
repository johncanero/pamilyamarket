import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'

import { FloorPlan } from '@/components/FloorPlan';

export const metadata: Metadata = {
    title: "Blueprint | Pamilya Market",
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
                {/* Floor Plan - Mobile*/}
                <div className="overflow-hidden rounded-md md:my-0 my-7 lg:my-0">
                    <Image
                        src="/images/blueprint/pamilyaMarketFloorPlan-compressed.png"
                        width={300}
                        height={300}
                        alt="pamilya-market-location"
                        className="rounded-2xl mx-auto md:hidden"
                    />
                </div>

                {/* Floor Plan */}
                <FloorPlan />
            </div>
        </div>
    )
}

export default page