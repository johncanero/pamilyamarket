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

const Products = () => {
    return (
        <div>
            <h2 className='lg:text-xl mb-4 font-bold text-amber-600'>
                Meat Products
            </h2>

            <div className='lg:flex gap-x-24 gap-y-12'>
                {/* Chicken Products */}
                <Table className='mb-8'>
                    <TableCaption>A list of chicken products.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Meat Item</TableHead>
                            <TableHead>Category</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Whole Chicken</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Legs</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Breast</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Wings</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Drumstick</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Thigh</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Chicken Ass</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Chicken Skin</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Liver (Atay) </TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Gizzard - (Atay Balunan)</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Feet - (Paa)</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Head - (Ulo)</TableCell>
                            <TableCell>Chicken</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                {/* Pork Products */}
                <Table>
                    <TableCaption>A list of pork products.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Meat Item</TableHead>
                            <TableHead>Category</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Pork Leg (Pigue)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pork Shoulder / Pork Butt (Kasim)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pork Chop</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pork Belly (Liempo)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pork Loin (Lomo)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Pork Hock / Pork Shank (Pata)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Liver (Atay)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Pork Spleen (Lapay)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Pork Heart (Puso)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pork Lungs (Baga)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pork Intestine (Bituka)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pig Tail (Buntot ng Baboy)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pig Ear (Tenga ng Baboy)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pork Ribs (Ribs ng Baboy)</TableCell>
                            <TableCell>Pork</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Products