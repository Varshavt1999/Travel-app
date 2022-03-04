import React from 'react'
import "../style.css"

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <h1>LetsTravel</h1>
        </div>
        <ul className='navbar'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Header