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

const OtherProducts = () => {
  return (
      <div className='mt-12'>
          <h2 className='lg:text-xl mb-4 font-bold text-amber-600'>
              Other Products
          </h2>

          <div className='lg:flex gap-x-24 gap-y-12'>
              {/* Other Products - Set 1 */}
              <Table className='mb-8'>
                  <TableCaption>A list of other products.</TableCaption>
                  <TableHeader>
                      <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead>Category</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow>
                          <TableCell className="font-medium">Crispy Fry</TableCell>
                          <TableCell>Seasoning</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Sinigang Mix</TableCell>
                          <TableCell>Seasoning</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Tomato Sauce</TableCell>
                          <TableCell>Seasoning</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Tomato Paste</TableCell>
                          <TableCell>Seasoning</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Bagoong Isda (Bottle)</TableCell>
                          <TableCell>Seasoning</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Pancit Bihon</TableCell>
                          <TableCell>Noodles/Pasta</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Pancit Canton</TableCell>
                          <TableCell>Noodles/Pasta</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Macaroni</TableCell>
                          <TableCell>Noodles/Pasta</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Beef Cubes</TableCell>
                          <TableCell>Cubes</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Pork Cubes</TableCell>
                          <TableCell>Cubes</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Chicken Cubes</TableCell>
                          <TableCell>Cubes</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Coco Mama</TableCell>
                          <TableCell>Coconut</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>

              {/* Other Products - Set 2 */}
              <Table className='mb-8'>
                  <TableCaption>A list of other products.</TableCaption>
                  <TableHeader>
                      <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead>Category</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow>
                          <TableCell className="font-medium">Coconut (Niyog)</TableCell>
                          <TableCell>Coconut</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className="font-medium">Spring Oil</TableCell>
                          <TableCell>Cooking</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Charcoal (Uling)</TableCell>
                          <TableCell>Cooking</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Egg(White)</TableCell>
                          <TableCell>Egg</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Egg(Salted)</TableCell>
                          <TableCell>Egg</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Sweet Plantain (Saba)</TableCell>
                          <TableCell>Banana</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Lakatan</TableCell>
                          <TableCell>Banana</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Latundan</TableCell>
                          <TableCell>Banana</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Tuyong</TableCell>
                          <TableCell>Dried Fish</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Daing</TableCell>
                          <TableCell>Dried Fish</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Dilis</TableCell>
                          <TableCell>Dried Fish</TableCell>
                      </TableRow>

                      <TableRow>
                          <TableCell className="font-medium">Chicharon</TableCell>
                          <TableCell>Sides</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </div>
      </div>
  )
}
 
export default OtherProducts