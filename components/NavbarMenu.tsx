'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from "framer-motion"

const NavbarMenu = () => {
    return (
        <div className='hidden lg:block'>
            <div className='md:flex md:justify-between lg:mx-16 md:py-6 hidden'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Image
                        src="/images/logo/pamilyaMarketTextwithLogo.png"
                        width={132}
                        height={132}
                        alt="pamilya-market-logo-text"
                    />
                </motion.div>

                <div className='mt-1'>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/pamilyamarketph"
                    >
                        <p className="text-amber-600">Visit Pamilya</p>
                    </Link>
                </div>
            </div>

            <hr></hr>
        </div>
    )
}

export default NavbarMenu