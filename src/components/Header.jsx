import React from 'react'
import logo from "../assets/logo.png"

function Header() {
  return (
  <header>
          {/* <div className="max-w-7xl mx-auto px-4 py-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div> */}

        <div>
            <img src={logo} alt="logo" className='w-20' />
        </div>
  </header>
  )
}

export default Header