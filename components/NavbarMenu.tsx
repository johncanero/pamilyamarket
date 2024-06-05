'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from "framer-motion"

const NavbarMenu = () => {
    return (
        <div className='hidden lg:block'>
            <div className='md:flex md:justify-between lg:mx-16 md:py-6 hidden'>
                <div className='flex'>
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
                                width={132}
                                height={132}
                                alt="pamilya-market-logo-text"
                            />
                        </Link>
                    </motion.div>

                    {/* Blueprint */}
                    <div className='mt-1 ml-10'>
                        <Link
                            rel="noopener noreferrer"
                            href="/blueprint"
                        >
                            <p className="text-amber-600">Blueprint</p>
                        </Link>
                    </div>

                    {/* Design */}
                    <div className='mt-1 ml-8'>
                        <Link
                            rel="noopener noreferrer"
                            href="/design"
                        >
                            <p className="text-amber-600">Design</p>
                        </Link>
                    </div>


                    {/* Registration */}
                    <div className='mt-1 ml-8'>
                        <Link
                            rel="noopener noreferrer"
                            href="/registration"
                        >
                            <p className="text-amber-600">Registration</p>
                        </Link>
                    </div>
                </div>


                {/* Visit Pamilya */}
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