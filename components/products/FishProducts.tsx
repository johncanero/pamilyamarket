import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const FishProducts = () => {
    return (
        <div className='mt-12'>
            <h2 className='lg:text-xl mb-4 font-bold text-amber-600'>
                Fish Products
            </h2>

            <div className='lg:flex gap-x-24 gap-y-12'>
                {/* Fish Products - Set 1 */}
                <Table className='mb-8'>
                    <TableCaption>A list of fish products.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fish Item</TableHead>
                            <TableHead>Category</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Salmon</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Salmon Belly</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Head Salmon (Ulo ng Salmon)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Red Snapper (Maya-Maya)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Jackfish (Talakitok)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Tuna</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Yellow Fin Tuna</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Shrimp (Hipon)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pampano</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Squid (Pusit)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Rabbit Fish (Dalagang Bukid)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                {/* Fish Products - Set 2 */}
                <Table className='mb-8'>
                    <TableCaption>A list of fish products.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fish Item</TableHead>
                            <TableHead>Category</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Gizzard Shad (Hiwas)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Bigeye Scad (Matambaka)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Spanish Mackerel (Hasa - Hasa)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Indian Mackerel (Alumahan)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Swordfish (Espada)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Tilapia</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Milkfish (Bangus)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Mackerel Scad (Galunggong)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Grouper (Lapu Lapu)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">White Snapper (Bitilya)</TableCell>
                            <TableCell>Fish</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default FishProducts