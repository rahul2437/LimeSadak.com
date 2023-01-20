import React from 'react'
import style from './Navbar.module.css'
import {Link} from 'react-router-dom'
import logo from "../../../src/assets/limesadak.jpg"

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <img src={logo} alt="" />
        <ul>
          <li><Link to="/">WOMEN</Link></li>
          <li><Link to="/">MEN</Link></li>
          <li><Link to="/">KIDS</Link></li>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/" className={style.offer}>OFFERS</Link></li>
        </ul>
      </div>
      <div className={style.right}>
        <Link>SCRAPBOOK</Link>
        <Link>SEARCH</Link>
        <Link>CART</Link>
        <Link>PROFILE</Link>
      </div>
    </div>
  )
}

export default Navbar
