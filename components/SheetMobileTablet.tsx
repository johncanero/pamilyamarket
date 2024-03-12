import React from 'react'
import Image from 'next/image';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { IoMenu } from "react-icons/io5";

const SheetMobileTablet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <IoMenu size={30} className='mt-2 text-zinc-800 hover:text-zinc-900' />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <div className='flex justify-between gap-x-2'>
                            <Image
                                src="/images/logo/pamilyaMarketLogo.png"
                                width={68}
                                height={68}
                                alt="pamilya-market-logo"
                                className=""
                            />
                            <Image
                                src="/images/logo/pamilyaMarketText.png"
                                width={100}
                                height={100}
                                alt="pamilya-market-logo-text"
                                className='w-48'
                            />
                        </div>
                    </SheetTitle>

                    <SheetDescription>
                        <hr></hr>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default SheetMobileTablet