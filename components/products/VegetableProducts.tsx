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

const VegetableProducts = () => {
    return (
        <div className='mt-12'>
            <h2 className='lg:text-xl mb-4 font-bold text-amber-600'>
                Vegetable Products
            </h2>

            <div className='lg:flex gap-x-24 gap-y-12'>
                {/* Vegetable Products - Set 1 */}
                <Table className='mb-8'>
                    <TableCaption>A list of vegetable products.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Vegetable Item</TableHead>
                            <TableHead>Category</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Beans</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Pechay Baguio</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Carrot</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Chayote (Sayote)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Papaya</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Cucumber (Pipino)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Cabage (Repolyo)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Eggplant (Talong)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Bitter Melon (Ampalaya)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Raddish (Labanos)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Patola</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Garlic (Bawang)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Onion Red (Sibuyas Red)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Onion White (Sibuyas White)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Potato (Patatas)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Calamansi</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Kamatis</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Luya</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Upo</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Kalabasa</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                {/* Vegetable Products - Set 2 */}
                <Table className='mb-8'>
                    <TableCaption>A list of vegetable products.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fish Item</TableHead>
                            <TableHead>Category</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Labuyo</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Sili Green</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Bell Pepper</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Sitaw</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Sigarilyas</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Sigarilyas</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Kangkong</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Dahon Sili</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Dahon Ampalaya</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Malunggay</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Monggo</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Pandan</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Leek</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Lemongrass (Tanglad)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Snow Cabbage (Pechay)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Chinese Cabbage (Bok choy)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Mustasa Leaves</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Saluyot</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Malabar Spinach (Alugbati)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="font-medium">Sweet Potato Leaves (Talbos ng Kamote)</TableCell>
                            <TableCell>Vegetable</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default VegetableProducts