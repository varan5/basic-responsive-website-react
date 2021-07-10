import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            LAVISH
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
