/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function NavbarMenu() {
    return (
        <Tabs defaultValue="home" className="w-[250px] mx-8 md:mx-16">
            <TabsList className="grid w-full grid-cols-2 gap-x-1">
                <Link
                    href="/"
                >
                    <TabsTrigger value="home">
                        Pamilya 
                    </TabsTrigger>
                </Link>

                <Link
                    href="/"
                >
                    <TabsTrigger value="password">
                        Location
                    </TabsTrigger>
                </Link>
            </TabsList>
        </Tabs>
    )
}
