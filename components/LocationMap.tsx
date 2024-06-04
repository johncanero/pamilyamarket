import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function LocationMap() {
    return (
        <ScrollArea className=" max-w-xs md:max-w-2xl lg:max-w-full whitespace-nowrap rounded-md border lg:border-none">
            <div className="flex w-max space-x-4 p-4">
                <div className="overflow-hidden rounded-md">
                    <Image
                        src="/images/location/post2-vicinityMap-compressed.png"
                        width={1400}
                        height={1400}
                        alt="pamilya-market-location"
                        className="mx-auto my-7 rounded-2xl lg:rounded-3xl"
                    />
                </div>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
