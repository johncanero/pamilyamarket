'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from "framer-motion"

// navigaiton links
import { useActivePath } from '../app/helper'
type NavigationItem = {
    href: string
    name: string
}

const navigation: NavigationItem[] = [
    { href: '/blueprint', name: 'Blueprint' },
    { href: '/design', name: 'Design' },
    { href: '/registration', name: 'Registration' },
]

// Reference: https://nikolasbarwicki.com/articles/highlight-currently-active-link-in-nextjs-13-with-app-router/

const NavbarMenu = () => {
    const checkActivePath = useActivePath()

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

                    <ul className='flex gap-x-8 ml-10 mt-1'>
                        {navigation.map(({ href, name }) => (
                            <li key={href}>
                                <Link
                                    rel="noopener noreferrer"
                                    href={href}
                                    className={`active ${checkActivePath(href) ? 'font-semibold text-amber-600' : 'text-amber-600'}`}
                                >
                                    <span>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
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



