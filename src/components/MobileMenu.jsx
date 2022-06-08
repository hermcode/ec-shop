import React from 'react'
import '@styles/MobileMenu.scss'
import { Link } from 'react-router-dom'

const MobileMenu = ({handleHideAll}) => {
  return (
    <div className="MobileMenu">
      <ul>
        <li>
          <Link to="/" onClick={handleHideAll}>CATEGORIES</Link>
        </li>
        <li>
          <Link to="/" onClick={handleHideAll}>All</Link>
        </li>
        <li>
          <Link to="/" onClick={handleHideAll}>Clothes</Link>
        </li>
        <li>
          <Link to="/" onClick={handleHideAll}>Electronics</Link>
        </li>
        <li>
          <Link to="/" onClick={handleHideAll}>Furnitures</Link>
        </li>
        <li>
          <Link to="/" onClick={handleHideAll}>Toys</Link>
        </li>
        <li>
          <Link to="/" onClick={handleHideAll}>Other</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/checkout" onClick={handleHideAll}>My orders</Link>
        </li>
        <li>
          <Link to="/account" onClick={handleHideAll}>My account</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/account" onClick={handleHideAll}className="email">hermcode@gmail.com</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleHideAll} className="sign-out">Sign out</Link>
        </li>
      </ul>
    </div>

  )
}

export default MobileMenu