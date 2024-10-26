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
            <h2 className='lg:text-lg mb-4'>
                Meat Products
            </h2>
            <Table>
                <TableCaption>A list of meat products.</TableCaption>
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
                </TableBody>
            </Table>
        </div>
    )
}

export default Products