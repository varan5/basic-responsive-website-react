import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdFingerprint } from 'react-icons/md'

const Navbar = () => {
  const [clickMenuIcon, setClickMenuIcon] = useState(false)

  const handleMenuIconClick = () => {
    setClickMenuIcon(!clickMenuIcon)
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MdFingerprint className="navbar-icon" />
            LAVISH
          </Link>

          <div className="menu-icon" onClick={handleMenuIconClick}>
            {clickMenuIcon ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
