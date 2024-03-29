import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function Registration() {
    return (
        <ScrollArea className="max-w-xs md:max-w-2xl mb-14 lg:max-w-full whitespace-nowrap rounded-md border lg:border-none">
            <div className="flex w-max space-x-4 p-4">
                <div className="overflow-hidden rounded-md">
                    <Image
                        src="/images/registration/pamilyaMarketDTIRegistrationWebsite-compressed.png"
                        width={1000}
                        height={1000}
                        alt="pamilya-market-registration"
                        className="mx-auto my-7 rounded-2xl lg:rounded-3xl"
                    />
                </div>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
