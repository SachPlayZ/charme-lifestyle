import React from 'react'
import { Link } from 'react-router-dom'
import "./Slider.scss"
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid justify-content-between">
    <a className="navbar-brand" href="/">Charme</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav centbut">
        <li className="nav-item">
          <a className="nav-link" href="#">Style AI</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Men's Fashion</a></li>
            <li><a className="dropdown-item" href="#">Women's Fashion</a></li>
            <li><a className="dropdown-item" href="#">Accessories</a></li>
          </ul>
        </li>
      </ul>
      
      <ul className="navbar-nav  mb-2 mb-lg-0 text-center text-lg-start">
        <li className="nav-item me-4">
          <Link className="nav-link fon" aria-current="page" to="/wishlist">
            <img className='d-lg-inline' src="https://cdn.discordapp.com/attachments/903660417073680394/1168980192765689938/pngwing.com.png?ex=6553bca4&is=654147a4&hm=1f0b9c6149076e4fa35f949ce5f241a506c20f03c0c99817349c86b3b9efb852&" alt="" width="30" height="30"/>
            <span>Wishlist</span>
            </Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link" to="/cart">
            <img className="d-lg-inline" src="https://cdn.discordapp.com/attachments/903660417073680394/1168980192467886271/pngwing.com1.png?ex=6553bca4&is=654147a4&hm=e990d79a4ce4f01c1233051a9ae108d6217b88cc1e089eb3a42c822f2c2bbf39&" alt="" width="30" height="30" />
            <span>Cart</span>
            </Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
