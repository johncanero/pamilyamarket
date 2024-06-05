import React from 'react'
import { NavbarTabs } from './NavbarTabs'
import NavbarMenu from './NavbarMenu'

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