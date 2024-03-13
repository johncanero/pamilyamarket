import React from 'react'
import { NavbarTabs } from './NavbarTabs'
import NavbarMenu from './NavbarMenu'

const Navbar = () => {
  return (
    <div>
      <div className='bg-orange-50 lg:bg-orange-100 py-2 '>
        <NavbarTabs />
      </div>

      <div>
        <NavbarMenu />
      </div>
    </div>
  )
}

export default Navbar