import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'
import MeatProducts from '@/components/products/MeatProducts';


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
        <div className="flex flex-col">
            <div className='mt-8 mb-24 mx-auto'>
                <div className='w-[300px] md:w-[600px] lg:w-[1000px]'>
                    <MeatProducts />
                </div>
            </div>
        </div>
    )
}

export default page