import React from 'react'
import { NavbarTabs } from '../navigation/NavbarTabs'
import NavbarMenu from '../navigation/NavbarMenu'


const Navbar = () => {
  return (
    <div>
      <div className=' lg:bg-orange-300 lg:py-2'>
        <NavbarTabs />
      </div>

      <div>
        <NavbarMenu />
      </div>
    </div>
  )
}

export default Navbar