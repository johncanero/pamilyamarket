import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavbarMenu = () => {
    return (
        <div className='hidden lg:block'>
            <div className='md:flex md:justify-between lg:mx-16 md:py-6 hidden'>
                <Image
                    src="/images/logo/pamilyaMarketText.png"
                    width={120}
                    height={120}
                    alt="pamilya-market-logo-text"
                />

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