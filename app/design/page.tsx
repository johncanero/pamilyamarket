
import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
    title: "Design | Pamilya Market",
    description: "Fairview's freshest! Nourish your family with quality meats, fish, veggies & more.",
    icons: {
        icon: '/images/logo/pamilyaMarketLogo.png',
        shortcut: '/images/logo/pamilyaMarketLogo.png',
    },
};

const page = () => {
    return (
        <div>
            {/* Design Images */}
            <div className='md:flex md:flex-wrap mb-16 mx-8 lg:mx-24'>
                <Image
                    src="/images/design/exterior0-pamilyaMarket-compressed.png"
                    width={500}
                    height={500}
                    alt="pamilya-market-design"
                    className="mx-auto max-w-xs my-10 lg:max-w-full rounded-2xl lg:rounded-3xl"
                />
                <Image
                    src="/images/design/exterior1-pamilyaMarket-compressed.png"
                    width={500}
                    height={500}
                    alt="pamilya-market-design"
                    className="mx-auto max-w-xs my-10 lg:max-w-full rounded-2xl lg:rounded-3xl"
                />
                <Image
                    src="/images/design/exterior2-pamilyaMarket-compressed.png"
                    width={500}
                    height={500}
                    alt="pamilya-market-design"
                    className="mx-auto max-w-xs my-10 lg:max-w-full rounded-2xl lg:rounded-3xl"
                />
                <Image
                    src="/images/design/exterior3-pamilyaMarket-compressed.png"
                    width={500}
                    height={500}
                    alt="pamilya-market-design"
                    className="mx-auto max-w-xs my-10 lg:max-w-full rounded-2xl lg:rounded-3xl"
                />
            </div>
        </div>
    )
}

export default page